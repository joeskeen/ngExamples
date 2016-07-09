import * as gulp from 'gulp';
import { stream as wiredep } from 'wiredep';
import * as path from 'path';
import * as fs from 'fs';

import { config } from '../config';
import { $ } from '../plugins';

/**
 * Compiles source TS files to JS with sourcemaps and optionally ng-annotates them
 */
export function js(src: string | string[], dest: string, annotate?: boolean) {
  return gulp.src(src)
    .pipe($.changed(dest, { extension: '.js' }))
    .pipe($.print(path => `Processing '${path}'...`))
    .pipe($.tslint({ configuration: './tslint.json' }))
    .pipe($.tslint.report('verbose'))
    .pipe($.sourcemaps.init())
      .pipe($.typescript({
        typescript: require('typescript')
      }))
      .js
      .pipe($.if(annotate, $.ngAnnotate({ single_quotes: true })))
    .pipe($.sourcemaps.write({ includeContent: false }))
    .pipe(gulp.dest(dest));
}

export function css(src: string | string[], dest: string) {
  return gulp.src(src)
    .pipe($.changed(dest, { extension: '.css' }))
    .pipe($.print(path => `Processing '${path}'...`))
    .pipe($.sourcemaps.init())
      .pipe($.sass().on('error', $.sass.logError))
      .pipe($.cssimport())
      .pipe($.autoprefixer())
      .pipe($.replace(config.assets.cssReplace.find, config.assets.cssReplace.replaceWith))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(dest));
}

export function templates(src: string | string[], dest: string) {
  return gulp.src(src)
    .pipe($.htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true }))
    .pipe($.angularTemplatecache(config.out.templates, {
      module: `${config.slug}.templates`,
      standalone: true
    }))
    .pipe(gulp.dest(dest));
}

export function constants(conf: typeof config.constants.prod, dest: string) {
  return gulp.src(config.constants.globalConfigFile)
    .pipe($.ngConstant({
      name: 'deploy.config',
      constants: conf,
      space: '  ',
      wrap: '"use strict";\n\n <%= __ngModule %>'
    }))
    .pipe(gulp.dest(dest));
}

export function inject(htmlFile: string, injectables: IInjectable[], dest: string) {
  const ignorePath = path.relative(path.dirname(htmlFile), config.bower).replace(path.sep, '/') + '/';
  console.log(`wiredep ignore path: ${ignorePath}`);
  let stream = gulp.src(htmlFile)
    .pipe(wiredep({ ignorePath: ignorePath }));
  injectables.forEach(i => {
    const injectOptions: gulpInject.IOptions = { //TODO: fix typings
      addRootSlash: false,
      ignorePath: i.ignorePath
    };
    if (i.label)
      injectOptions.starttag = `<!-- inject:${i.label} -->`;

    stream = stream.pipe($.inject(gulp.src(i.glob, { read: false }), injectOptions));
  });
  stream = stream.pipe(gulp.dest(dest));
  return stream;
}

export function buildIndex() {
  return inject(config.client.index, [
    {
      glob: [
        config.all('module.js', config.out.clientBuilt),
        config.all('{js,css}', config.out.clientBuilt)
      ],
      ignorePath: path.relative('.', config.out.clientBuilt)
    },
    {
      glob: [
        `${config.bower}font-awesome/css/font-awesome.css`,
      ],
      ignorePath: path.relative('.', config.bower),
      label: 'font-awesome'
    }
  ], config.out.clientBuilt)
}

interface IInjectable {
  glob: string | string[];
  ignorePath: string;
  label?: string;
}

// imports for typing use only - removed from emitted JS
import * as gulpInject from 'gulp-inject';
