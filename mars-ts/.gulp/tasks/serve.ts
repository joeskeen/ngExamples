/// <reference path="../../typings/globals/browser-sync/index.d.ts" />

import { config, runtimeConfig, serverConfig, args } from '../config';
import { $ } from '../plugins';
import { log } from '../log';

import * as browserSync from 'browser-sync';
import * as url from 'url';

interface IServeOptions {
	root: string | string[];
	port: number;
	index?: string;
	server?: boolean;
}

export function serve(options: IServeOptions, watchFiles: string[], done?: Function) {
	log('starting nodemon...');
	return $.nodemon({
		script: `${config.out.serverBuilt}server.js`,
		watch: [ config.out.serverBuilt ],
		delay: 1
	})
	.on('start', () => {
		log('nodemon started');
		try {
			log('browserSync Starting');
			startBrowserSync(options, watchFiles);
			log('browserSync Started');
		} catch (error) {
			log('error starting browserSync', error);
		}
	})
	.on('restart', (e) => {
		log('nodemon restarted', e);
		browserSync.reload();
	})
	.on('crash', (e) => {
		log('nodemon crashed', e);
		browserSync.exit();
		if (done)
			done();
	})
	.on('exit', () => {
		log('nodemon exited');
		browserSync.exit();
		if (done)
			done();
	});
}

export function startBrowserSync(options: IServeOptions, watchFiles: string[], done?: Function) {
	const port = options.port;

	const bsOptions: any = {
		open: options.index || !runtimeConfig['noserve'] && !!watchFiles,
		port: port,
		ui: { port: port + 1 },
		files: watchFiles
	};

	if (options.server) {
		bsOptions.server = {
			baseDir: options.root,
			index: options.index || 'index.html',
			middleware: []
		}
	} else {
		bsOptions.proxy = 'localhost:' + serverConfig.defaultPort;
	}

	return browserSync.create().init(bsOptions, () => {
		if (done)
			done();
	});
}

export function serveDev() {
	const watchFiles = [
		config.all(null, config.client.root),
		config.all(null, config.out.clientBuilt),
		//don't watch the files we build, we will watch the output instead
		`!${config.all('html', config.client.root)}`,
		`!${config.all('ts', config.client.root)}`,
		`!${config.all('sass', config.client.root)}`
	];
	return serve({
			root: config.searchPath(),
			port: args.port || config.serve.port
		}, watchFiles);
}

export function serveDist() {
	return serve({
			root: [config.out.dist],
			port: args.port || config.serve.port
	}, []);
}