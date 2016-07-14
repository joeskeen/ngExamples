/// <reference path="../typings/globals/node/index.d.ts" />
/// <reference path="../typings/globals/gulp/index.d.ts" />
/// <reference path="../typings/globals/yargs/index.d.ts" />

import * as path from 'path';

/**
 * Note that file paths are relative to the Angular project root (where the package.json
 * file is), not relative to the .gulp/ folder
 */
const slug = 'MarsApp';
const clientRoot = './app/';
const assetsRoot = clientRoot;
const outRoot = './.generated/';
const bowerRoot = './bower_components/';
const testRoot = './test/';
const backendRoot = `./server/`;

export const config = {
  client: {
    root: clientRoot,
    index: `${clientRoot}index.html`
  },
  server: {
    root: backendRoot,
    config: `${backendRoot}serverConfig.json`
  },
  out: {
    root: outRoot,

    clientBuilt: `${outRoot}client/built/`,
    builtIndex: `${outRoot}client/built/index.html`,
    templates: `app.templates.js`,

    serverBuilt: `${outRoot}server/`,

    dist: `${outRoot}client/dist/`,
    preDist: `${outRoot}client/preDist/`,
    test: {
      spec: `${outRoot}test/spec/`, 
      e2e: `${outRoot}test/functional/`,
      karmaConfig: `${outRoot}test/spec/karma.conf.js`,
      protractorConfig: `${outRoot}test/functional/protractor.conf.js`,
      report: `${outRoot}test/report/`
    }
  },
  assets: {
    root: assetsRoot,
    fonts: <IFileCollection[]>[
      { src: `${bowerRoot}font-awesome/` },
      { src: `${bowerRoot}angular-ui-grid/`, dest: `styles/` },
      { src: `${assetsRoot}styles/intermountain-bootstrap/fonts/Open-Sans/` },
      { src: `${bowerRoot}bootstrap-sass-official/assets/` }
    ],
    images: [
      { src: `${assetsRoot}styles/intermountain-bootstrap/`, dest: `styles/intermountain-bootstrap/` },
      { src: `${assetsRoot}images/`, dest: `images/` }
    ],
    cssReplace: { find: '/bootstrap-sass-official/assets/', replaceWith: '../' }
  },
  bower: bowerRoot,
  nodeModules: './node_modules/',
  constants: {
    dev: { ENV: { isDev: true, testingOn: true } },
    dist: { ENV: { isDev: true, testingOn: false } },
    prod: { ENV: { isDev: false, testingOn: false } },
    globalConfigFile: './.gulp/deploy.config.json'
  },
  test: {
    root: testRoot,
    spec: {
      runner: `${testRoot}specRunner/jasmineSpecRunner.html`,
      ts: [
        all('ts', `${testRoot}spec/`),
        all('spec.ts', clientRoot)
      ],
      karmaConfig: `${testRoot}karma.conf.ts`
    },
    e2e: {
      root: `${testRoot}functional/`,
      tests: [
        `${testRoot}functional/**/*.ts`,
        `!${testRoot}functional/*conf*.ts`,
      ],
      localConf: `${testRoot}functional/conf.js`
    }
  },
  serve: { port: 3000, testPort: 3100 },
  all: all,
  allFonts: allFonts,
  allImages: allImages,
  slug: slug,
  searchPath: () => [
      config.out.clientBuilt,
      config.out.test.report,
      config.client.root,
      config.assets.root,
      config.bower
    ].concat(config.assets.fonts.map(f => <string>f.src)), //set below
  testSearchPath: () => [ config.nodeModules ]
    .concat(config.searchPath())
    .concat([  
      config.out.test.spec,
      path.dirname(config.test.spec.runner)
    ])
};

///////////////////////////////////////
// Shouldn't need to edit below here //
///////////////////////////////////////
import * as yml from 'js-yaml';
import * as fs from 'fs';
import * as yargs from 'yargs';

export const args = yargs
  .option('verbose', { boolean: true, alias: 'v' })
  .option('port', { number: true, alias: 'p' })
  .argv;

export const runtimeConfig: { [key: string]: any } = {};

export const serverConfig = JSON.parse(fs.readFileSync(config.server.config).toString());

export interface IFileCollection {
  src: string | string[];
  dest?: string;
}

function all(extension?: string, root?: string) {
  return `${root}**/*.${extension || '*'}`;
}
function allFonts(root?: string) {
  return all('{otf,eot,svg,ttf,woff,woff2}', root);
}
function allImages(root?: string) {
  return all('{png,jpg,jpeg,gif,svg}', root);
}