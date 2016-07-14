/// <reference path="../typings/globals/del/index.d.ts" />

import * as gulp from 'gulp';
import * as del from 'del';
import * as sequence from 'run-sequence';

import { $ } from './plugins';
import { config } from './config';
import * as build from './tasks/build';
import * as serve from './tasks/serve';
import * as test from './tasks/unit-tests';

const gulpHelp = $.help(gulp, { hideEmpty: true });

gulpHelp.task('go',
  'Does everything you need to to get started developing, including building, testing, and serving the code.',
  (done) => sequence(['build', 'build-specs'], ['unit-tests', 'watch-dev', 'watch-specs', 'run-server', 'launch-specRunner'], done),
  { aliases: ['serve'] });

gulpHelp.task('test',
  'Runs unit tests using Karma and Jasmine.',
  (done) => sequence(['build-specs'], () => test.runKarma(done)),
  { aliases: ['karma', 'unit-tests'] });

gulp.task('build', ['js','css','templates'], () => build.buildIndex());
gulp.task('js', () => build.js(
  [ config.all('ts', config.client.root) ],
  config.out.clientBuilt, true));
gulp.task('css', () => build.css(config.all('scss', config.assets.root), config.out.clientBuilt));
gulp.task('templates', () => build.templates(config.all('html', config.client.root+'*/'), config.out.clientBuilt));

gulp.task('watch-dev', () => gulp.watch([ config.all('{ts,scss,html}', config.client.root), config.all('{ts,scss,html}', config.assets.root) ], () => gulpHelp.start('build')));
gulp.task('watch-specs', () => gulp.watch(config.test.spec.ts, () => gulpHelp.start('js-specs')));

gulp.task('build-server', ['config'], () => build.js(config.all('ts', config.server.root), config.out.serverBuilt));
gulp.task('run-server', ['build-server', 'build', 'watch-client', 'watch-server'], () => serve.serveDev());

gulp.task('build-specs', ['js', 'js-specs'], () => test.injectSpecRunner());
gulp.task('js-specs', () => build.js(config.test.spec.ts.concat(config.test.spec.karmaConfig), config.out.test.spec));

gulp.task('clean', () => del(config.out.root));

gulp.task('launch-specRunner', () => test.serveSpecRunner());

gulp.task('watch-client', () => gulp.watch(
  [ config.all('{ts,scss,html}', config.client.root) ], 
  ['build']));
gulp.task('watch-server', () => gulp.watch(
  [ config.all('ts', config.server.root) ], 
  ['build-server']));

gulp.task('config', () => 
  gulp.src(config.server.config)
      .pipe(gulp.dest(config.out.serverBuilt)));
