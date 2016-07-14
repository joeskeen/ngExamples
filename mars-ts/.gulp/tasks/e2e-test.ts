/// <reference path="../../typings/globals/browser-sync/index.d.ts" />

import * as browserSync from 'browser-sync';
import * as gulp from 'gulp';

import { config } from '../config';
import { $ } from '../plugins';

export function updateWebDriver(done) {
  return $.protractor.webdriver_update(errorCode => {
		if (errorCode)
			throw errorCode;
		done();
	});
}

export function runProtractor(baseAddress: string, configFile?: string) {
	const gulpProtractor = $.protractor;
	const protractor = gulpProtractor.protractor;

	return gulp.src([
		'node_modules/protractor/lib/protractor.js',
		config.all('js', config.out.test.e2e)
	])
		.pipe(protractor({
			configFile: configFile || config.out.test.protractorConfig,
			args: [
				'--loopback',
				'--baseUrl', baseAddress
			]
		}))
		.on('close', () => {
			console.log('protractor: on close');
			const instance = browserSync.get('serve');
      if (instance)
        instance.exit();
			process.exit(0);
		})
		.on('error', function(e) { throw e; });
}