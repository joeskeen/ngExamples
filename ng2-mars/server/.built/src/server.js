/// <reference path="..\typings\tsd.d.ts" />
var request = require('request');
var express = require('express');
var moment = require('moment');
var path_1 = require('path');
var app = express();
var appBuilt = path_1.join(__dirname, '../../../client/.built');
var appHtml = path_1.join(__dirname, '../../../client/app');
var appDeps = path_1.join(__dirname, '../../../client/node_modules');
app.use(express.static(appHtml));
app.use(express.static(appBuilt));
app.use(express.static(appDeps));
setUpRestApi(app);
app.all('/*', function (req, res, next) {
    console.log("redirecting " + req.url + " to index.html");
    res.redirect('/');
});
var server = app.listen(8634, function () {
    var port = server.address().port;
    console.log('Express app running at http://localhost:%s/', port);
});
//////////////////////////////////////
function setUpRestApi(app) {
    app.get('/api/test', function (req, res) {
        res.send('Hello World!');
    });
    app.get('/api/weather', function (req, res) {
        req.pipe(request('http://marsweather.ingenology.com/v1/latest/'))
            .pipe(res);
    });
    app.get('/api/weather/archive', function (req, res) {
        var now = moment();
        var start = now.clone().subtract(30, 'days');
        var format = function (moment) { return moment.format('YYYY-MM-DD'); };
        var query = "terrestrial_date_start=" + format(start) + "&terrestrial_date_end=" + format(now);
        console.log("querying " + query + "...");
        req.pipe(request("http://marsweather.ingenology.com/v1/archive/?" + query))
            .pipe(res);
    });
    app.get('/api/photos', function (req, res) {
        req.pipe(request('http://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000'))
            .pipe(res);
    });
    app.get('/api/news', function (req, res) {
        req.pipe(request('http://twitrss.me/twitter_user_to_rss/?user=MarsCuriosity&fetch=Fetch+RSS'))
            .pipe(res);
    });
}
