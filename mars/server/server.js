var request = require('request');
var express = require('express');
var app = express();
var path = require('path');
var join = path.join;

var appRoot = join(__dirname, '..', 'app');

app.use('/bower', express.static('bower_components/'));

app.use(express.static(appRoot));

setUpRestApi(app);

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: appRoot });
});

var server = app.listen(8634, function(){
	var port = server.address().port;

	console.log('Express app running at http://localhost:%s/', port);
});

//////////////////////////////////////

function setUpRestApi(app) {
	app.get('/api/test', function (req, res) {
		res.send('Hello World!');
	});

	app.get('/api/weather', function(req, res) {
		req.pipe(request('http://marsweather.ingenology.com/v1/latest/'))
		   .pipe(res);
	});

	app.get('/api/weather/archive', function(req, res) {
		var thirtyDays = 1000 * 60 * 60 * 24 * 30;
		var endDate = new Date(Date.now() + thirtyDays);
		var query = 'terrestrial_date_start='+formatDate(new Date())+'&terrestrial_date_end='+formatDate(endDate);
		req.pipe(request('http://marsweather.ingenology.com/v1/archive/?'+query))
		   .pipe(res);

		function formatDate(date) {
			var day = date.getDate();
		    var month = date.getMonth();
		    var year = date.getFullYear();

			return year + '-' + month + '-' + day;
		}
	});

	app.get('/api/photos', function(req, res) {
		req.pipe(request('http://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000'))
		   .pipe(res);
	});

	app.get('/api/news', function(req, res) {
		req.pipe(request('http://twitrss.me/twitter_user_to_rss/?user=MarsCuriosity&fetch=Fetch+RSS'))
		   .pipe(res);
	});
}