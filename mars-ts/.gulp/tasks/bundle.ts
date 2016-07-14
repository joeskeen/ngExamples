/// <reference path="../../typings/globals/vinyl/index.d.ts" />

import * as gulp from 'gulp';
import * as path from 'path';
const eventStream = require('event-stream');

import { config, IFileCollection } from '../config';
import { $ } from '../plugins';

export function revision(src: string, dest: string, metadataDest?: string) {
  const revAll = new $.revAll({
    dontRenameFile: [ /\/favicon.ico$/g, /\/index.html/g ]
  });

  return gulp.src(src)
    .pipe(revAll.revision())
    .pipe(gulp.dest(dest))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest(metadataDest || dest))
    .pipe(revAll.versionFile())
    .pipe(gulp.dest(metadataDest || dest));
}

export function useref(srcHtml: string, dest: string) {
  const revAll = new $.revAll({
    dontRenameFile: [/^\/favicon.ico$/g, /^\/index.html/g]
  });
  return gulp.src(srcHtml)
    .pipe($.useref({
      searchPath: config.searchPath()
    }))
    .pipe($.if(/scripts\.js$/, $.uglify()))
    .pipe($.if(/\.css$/, $.csso()))
    .pipe(gulp.dest(dest));
}

export function copyAssetFiles(assets: IFileCollection[], dest: string) {
  const streams = assets.map(a =>
      gulp.src(a.src)
        .pipe($.if(/\.(svg|png|jpe?g|gif)$/i,
            $.imagemin([
              $.imagemin.gifsicle(),
              $.imagemin.jpegtran(),
              $.imagemin.optipng(),
              $.imagemin.svgo({
                plugins: [
                  { cleanupIDs: false },
                  { removeViewBox: false },
                  { removeUselessStrokeAndFill: false },
                  { removeEmptyAttrs: false }
                ]
              })
            ],
            {
              verbose: true
            }
            )))
        //rewrite paths of assets files if a custom dest subdir is specified
        .pipe(eventStream.through(function write(data: vinyl) {
          if (a.dest) {
            const relativeDir = path.dirname(path.relative(data.base, data.path));
            const destFile = path.join(data.base, a.dest || '', relativeDir, path.basename(data.path));
            data.path = destFile;
          }
          this.emit('data', data);
        }))
  );
  return eventStream.merge(streams)
    .pipe(gulp.dest(dest));
}

import vinyl = require('vinyl');