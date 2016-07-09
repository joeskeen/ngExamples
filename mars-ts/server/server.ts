import * as request from 'request';
import { join } from 'path';
import * as express from 'express';
import { Express } from "express-serve-static-core";
import * as xml2js from 'xml2js';
import * as through2 from 'through2';
const app = express();

const appRoot = join(__dirname, '..', 'client/built');

app.use(express.static('bower_components/'));

app.use(express.static(appRoot));
setUpRestApi(app);

app.all('/', (req, res, next) => {
	// Just send the index.html for other files to support HTML5Mode
	res.sendFile('index.html', { root: appRoot });
});

const server = app.listen(8634, () => {
	const port = server.address().port;

	console.log('Express app running at http://localhost:%s/', port);
});

//////////////////////////////////////

function setUpRestApi(app: Express) {
	app.get('/api/test', (req, res) => {
		res.send('Hello World!');
	});

	app.get('/api/weather', (req, res) => {
		req.pipe(request.get('http://marsweather.ingenology.com/v1/latest/'))
			.pipe(res);
	});

	app.get('/api/weather/archive', (req, res) => {
		var thirtyDays = 1000 * 60 * 60 * 24 * 30;
		var startDate = new Date(Date.now() - thirtyDays);
		var query = 'terrestrial_date_start=' + formatDate(startDate) + '&terrestrial_date_end=' + formatDate(new Date());
		req.pipe(request.get('http://marsweather.ingenology.com/v1/archive/?' + query))
			.pipe(res);

		function formatDate(date: Date) {
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();

			return year + '-' + month + '-' + day;
		}
	});

	app.get('/api/photos', (req, res) => {
		req.pipe(request.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'))
			.pipe(res);
	});

	app.get('/api/news', (req, res) => {
		res.contentType('application/json');
		const transformer = (() => {
			let data = [];
			return { transform: addChunk, flush: parseXml };

			function addChunk(chunk: Buffer, enc: string, callback: (err?: any, data?: any) => void) {
				data.push(chunk.toString());
				callback();
			}

			function parseXml(callback: (err?: any, data?: any) => void) {
				xml2js.parseString(data.join(''), { explicitArray: false }, (err, data) => {
					if (err)
						callback(err);

					var json = JSON.stringify(data);
					this.push(json);
					callback();
				});
			}
		})();
		request.get('http://twitrss.me/twitter_user_to_rss/?user=MarsCuriosity&fetch=Fetch+RSS')
			//convert RSS XML to JSON
			.pipe(through2(transformer.transform, transformer.flush))
			.pipe(res);
	});

	function dump(val) {
		console.dir(val);
		return val;
	}
}