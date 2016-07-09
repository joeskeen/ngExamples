import * as gulp from 'gulp';
import * as plugins from 'gulp-load-plugins';

export var $ = plugins<IPlugins>({ lazy: true });

export interface IPlugins {
  /** adds browser-specific CSS prefixes to your CSS for cross-platform compatibility */
  autoprefixer: typeof gulpAutoprefixer;
  /** takes HTML templates and creates a JS file allowing for faster loading times */
  angularTemplatecache: IPlugin;
  /** filters the stream to include only files that have changed */
  changed: typeof gulpChanged;
  /** finds CSS $import statements and inlines the content from the referenced file */
  cssimport: IPlugin;
  /** minifies CSS files */
  csso: typeof gulpCsso;
  /** conditionally pipe files to a stream */
  if: typeof gulpIf;
  /** minifies PNG, JPG, GIF, and SVG (ignores all other files) */
  imagemin: typeof gulpImagemin;
  /** injects file references into an HTML file */
  inject: typeof gulpInject;
  /** display task help to the user */
  help: typeof gulpHelp;
  /** minifies HTML */
  htmlmin: typeof gulpHtmlmin;
  /** annotate Angular code with minification-safe $inject DI statements */
  ngAnnotate: typeof gulpNgAnnotate;
  /** generates Angular constants for configuration at build time */
  ngConstant: IPlugin;
  /** */
  nodemon: typeof gulpNodemon;
  /** prints all files in the stream, useful for debugging */
  print: IPlugin;
  /** allows you to install and run Protractor */
  protractor: typeof gulpProtractor;
  /** replaces text in a file */
  replace: typeof gulpReplace;
  /**  */
  revAll: typeof gulpRevAll;
  /** compiles SCSS files to CSS */
  sass: typeof gulpSass;
  /** outputs statistics for Gulp tasks */
  stats: IPlugin;
  /** allows for the creation of sourcemaps for after -> before on transformed files */
  sourcemaps: typeof gulpSourcemaps;
  /** lints TypeScript code */
  tslint: typeof gulpTslint.default;
  /** compiles TS files to JS */
  typescript: typeof gulpTypescript;
  /** minifies JS code */
  uglify: typeof gulpUglify;
  /** concat assets from reference in HTML file */
  useref: typeof gulpUseref;
}

interface IPlugin {
  (...args: any[]): NodeJS.ReadWriteStream;
  [key: string]: any;
}

// these are only imported for their types used above; the TS compiler
// will strip these from the JS output since they aren't used anywhere.
// The advantage this brings is strong typing while still allowing for
// lazy loading of plugins.
import * as gulpChanged from 'gulp-changed';
import * as gulpHelp from 'gulp-help';
import * as gulpIf from 'gulp-if';
import * as gulpTypescript from 'gulp-typescript';
import * as gulpNgAnnotate from 'gulp-ng-annotate';
import * as gulpSourcemaps from 'gulp-sourcemaps';
import * as gulpHtmlmin from 'gulp-htmlmin';
import * as gulpInject from 'gulp-inject';
import * as gulpSass from 'gulp-sass';
import * as gulpAutoprefixer from 'gulp-autoprefixer';
import * as gulpUseref from 'gulp-useref';
import * as gulpUglify from 'gulp-uglify';
import * as gulpCsso from 'gulp-csso';
import * as gulpRev from 'gulp-rev';
import * as gulpRevReplace from 'gulp-rev-replace';
import * as gulpReplace from 'gulp-replace';
import * as gulpTslint from 'gulp-tslint';
import * as gulpProtractor from 'gulp-protractor';
import * as gulpRevAll from 'gulp-rev-all';
import * as gulpImagemin from 'gulp-imagemin';
import * as gulpNodemon from 'gulp-nodemon';