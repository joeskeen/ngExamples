import * as gulp from 'gulp';

import { $ } from './plugins';
import { config } from './config';
import * as build from './tasks/build';

const gulpHelp = $.help(gulp, { hideEmpty: true });

gulp.task('build', ['js','css','templates'], () => build.buildIndex());
gulp.task('js', () => build.js(
  [ config.all('ts', config.client.root) ],
  config.out.clientBuilt, true));
gulp.task('css', () => build.css(config.all('scss', config.assets.root), config.out.clientBuilt));
gulp.task('templates', () => build.templates(config.all('html', config.client.root+'*/'), config.out.clientBuilt));

gulp.task('build-server', () => build.js(config.all('ts', config.server.root), config.out.serverBuilt));
gulp.task('run-server', ['build-server', 'build', 'watch-client', 'watch-server'], () => $.nodemon({
  script: `${config.out.serverBuilt}server.js`,
  watch: [ config.out.serverBuilt ]
}));

gulp.task('watch-client', () => gulp.watch(
  [ config.all('{ts,scss,html}', config.client.root) ], 
  ['build']));
gulp.task('watch-server', () => gulp.watch(
  [ config.all('ts', config.server.root) ], 
  ['build-server']));
