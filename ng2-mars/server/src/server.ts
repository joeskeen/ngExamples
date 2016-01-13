/// <reference path="..\typings\tsd.d.ts" />

import * as request from 'request';
import * as express from 'express';
import * as moment from 'moment';
import { join } from 'path';

const app = express();

const appBuilt = join(__dirname, '../../../client/.built');
const appHtml = join(__dirname, '../../../client/app');
const appDeps = join(__dirname, '../../../client/node_modules');

app.use(express.static(appHtml));
app.use(express.static(appBuilt));
app.use(express.static(appDeps));

setUpRestApi(app);

app.all('/*', function(req, res, next) {
    console.log(`redirecting ${req.url} to index.html`);
    res.redirect('/');
});

const server = app.listen(8634, function(){
	const port = server.address().port;

	console.log('Express app running at http://localhost:%s/', port);
});

//////////////////////////////////////

function setUpRestApi(app: express.Express) {
	app.get('/api/test',  (req, res) => {
		res.send('Hello World!');
	});

	app.get('/api/weather', (req, res) => {
		req.pipe(request('http://marsweather.ingenology.com/v1/latest/'))
		   .pipe(res);
	});

	app.get('/api/weather/archive', (req, res) => {
        const now = moment();
        const start = now.clone().subtract(30, 'days');
        const format = (moment: moment.Moment) => moment.format('YYYY-MM-DD');
		const query = `terrestrial_date_start=${format(start)}&terrestrial_date_end=${format(now)}`;
        console.log(`querying ${query}...`);

		req.pipe(request(`http://marsweather.ingenology.com/v1/archive/?${query}`))
		   .pipe(res);
	});

	app.get('/api/photos', (req, res) => {
		req.pipe(request('http://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000'))
		   .pipe(res);
	});

	app.get('/api/news', (req, res) => {
		req.pipe(request('http://twitrss.me/twitter_user_to_rss/?user=MarsCuriosity&fetch=Fetch+RSS'))
		   .pipe(res);
	});
}