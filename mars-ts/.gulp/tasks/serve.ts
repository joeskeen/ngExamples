import { config, runtimeConfig, args } from '../config';
import { $ } from '../plugins';

import * as browserSync from 'browser-sync';
import * as url from 'url';
const proxyMiddleware = require('proxy-middleware');

interface IServeOptions {
	root: string | string[];
	port: number;
	index?: string;
}

export function serve(options: IServeOptions, watchFiles: string[], done?: Function) {
	const port = options.port;
	const serveUrl = `http://localhost:${port}/`;
	const proxyTo = `${config.backend.url()}${config.slug}/`;
	console.log(`Server requests will be proxied to '${proxyTo}'.`);

	const proxies = [
		{ route: `/${config.slug}/`, forwardTo: proxyTo }
	];
	const middleware = [ ];
	for (let i = 0; i < proxies.length; i++) {
		const proxyEntry = proxies[i];
		const proxy: any = url.parse(proxyEntry.forwardTo);
		proxy.route = proxyEntry.route;
		proxy.via = true;
		proxy.cookieRewrite = true;
		proxy.preserveHost = true;
		middleware.push(proxyMiddleware(proxy));
	}

	const bs = browserSync.create('serve');
	return bs.init({
		open: !runtimeConfig['noserve'] && !!watchFiles,
		port: port,
		server: {
			baseDir: options.root,
			index: options.index || 'index.html',
			middleware: middleware
		},
		ui: {
			port: port + 1
		},
		files: watchFiles
	}, () => {
		if (done)
			done();
	});
}

export function serveDev() {
	const watchFiles = [
		config.all(null, config.app.root),
		config.all(null, config.out.built),
		//don't watch the files we build, we will watch the output instead
		`!${config.all('html', config.app.root)}`,
		`!${config.all('ts', config.app.root)}`,
		`!${config.all('sass', config.app.root)}`
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