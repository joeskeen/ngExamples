import { relative, dirname, join } from 'path';
import { Server as KarmaServer } from 'karma';

import { config } from '../config';
import { $ } from '../plugins';
import { inject } from './build';
import { startBrowserSync } from './serve';

/*
karma/jasmine and protractor testing
*/
export function injectSpecRunner() {
  const jasmineRoot = `${config.nodeModules}jasmine-core/lib/jasmine-core/`;
  return inject(config.test.spec.runner, [
    {
      glob: [ 'jasmine.css', 'jasmine.js', 'jasmine-html.js', 'boot.js' ]
        .map(f => jasmineRoot + f),
      ignorePath: relative('.', config.nodeModules),
      label: 'jasmine'
    },
    {
      glob: [ 
        config.all('js', config.out.clientBuilt), 
        '!' + config.all('spec.js', config.out.clientBuilt) 
      ],
      ignorePath: relative('.', config.out.clientBuilt)
    },
    {
      glob: `${config.nodeModules}angular-mocks/angular-mocks.js`,
      ignorePath: relative('.', config.nodeModules),
      label: 'angular-mocks'
    },
    {
      glob: `${config.nodeModules}q/q.js`,
      ignorePath: relative('.', config.nodeModules),
      label: 'q'
    },
    {
      glob: [
        config.all('js', config.out.test.spec),
        '!**/karma.conf.js'
      ],
      ignorePath: relative('.', config.out.test.spec),
      label: 'spec'
    }
  ], config.out.test.spec)
}

export function serveSpecRunner() {
  return startBrowserSync({
    root: config.testSearchPath(),
    port: config.serve.testPort,
    index: 'jasmineSpecRunner.html',
    server: true
  }, [
    config.all('js', config.out.clientBuilt),
    config.all('js', config.out.test.spec)
  ])
}

export function runKarma(done: Function) {
  try {
		const configPath = join(process.cwd(), config.out.test.karmaConfig);
		console.log(`looking for Karma conf at ${configPath}`);
		const server = new KarmaServer({
			configFile: configPath,
			singleRun: true
		}, exitCode => {
			console.log(`Karma has exited with code ${exitCode}.`);
			done();
		});
		server.start();
		console.log(`server created`);
	} catch (error) {
		console.error('ERROR', error);
	}
}