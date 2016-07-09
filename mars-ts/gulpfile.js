//Allow TS files to work with require()
require('ts-node').register({
  fast: true //skip type checking, only transpile
});
//Load Gulp tasks from gulpfile.ts
require('./.gulp/gulpfile.ts');
