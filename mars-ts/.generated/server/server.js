"use strict";
var request = require('request');
var path_1 = require('path');
var express = require('express');
var xml2js = require('xml2js');
var through2 = require('through2');
var app = express();
var appRoot = path_1.join(__dirname, '..', 'client/built');
app.use(express.static('bower_components/'));
app.use(express.static(appRoot));
setUpRestApi(app);
app.all('/', function (req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: appRoot });
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
        req.pipe(request.get('http://marsweather.ingenology.com/v1/latest/'))
            .pipe(res);
    });
    app.get('/api/weather/archive', function (req, res) {
        var thirtyDays = 1000 * 60 * 60 * 24 * 30;
        var startDate = new Date(Date.now() - thirtyDays);
        var query = 'terrestrial_date_start=' + formatDate(startDate) + '&terrestrial_date_end=' + formatDate(new Date());
        req.pipe(request.get('http://marsweather.ingenology.com/v1/archive/?' + query))
            .pipe(res);
        function formatDate(date) {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return year + '-' + month + '-' + day;
        }
    });
    app.get('/api/photos', function (req, res) {
        req.pipe(request.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'))
            .pipe(res);
    });
    app.get('/api/news', function (req, res) {
        res.contentType('application/json');
        var transformer = (function () {
            var data = [];
            return { transform: addChunk, flush: parseXml };
            function addChunk(chunk, enc, callback) {
                data.push(chunk.toString());
                callback();
            }
            function parseXml(callback) {
                var _this = this;
                xml2js.parseString(data.join(''), { explicitArray: false }, function (err, data) {
                    if (err)
                        callback(err);
                    var json = JSON.stringify(data);
                    _this.push(json);
                    callback();
                });
            }
        })();
        request.get('http://twitrss.me/twitter_user_to_rss/?user=MarsCuriosity&fetch=Fetch+RSS')
            .pipe(through2(transformer.transform, transformer.flush))
            .pipe(res);
    });
    function dump(val) {
        console.dir(val);
        return val;
    }
}

//# sourceMappingURL=data:application/json;base64,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Q0FBQztZQUNKLENBQUM7UUFDRixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQzthQUV0RixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQyxDQUFDO0lBRUgsY0FBYyxHQUFHO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNaLENBQUM7QUFDRixDQUFDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgRXhwcmVzcyB9IGZyb20gXCJleHByZXNzLXNlcnZlLXN0YXRpYy1jb3JlXCI7XHJcbmltcG9ydCAqIGFzIHhtbDJqcyBmcm9tICd4bWwyanMnO1xyXG5pbXBvcnQgKiBhcyB0aHJvdWdoMiBmcm9tICd0aHJvdWdoMic7XHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmNvbnN0IGFwcFJvb3QgPSBqb2luKF9fZGlybmFtZSwgJy4uJywgJ2NsaWVudC9idWlsdCcpO1xyXG5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnYm93ZXJfY29tcG9uZW50cy8nKSk7XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKGFwcFJvb3QpKTtcclxuc2V0VXBSZXN0QXBpKGFwcCk7XHJcblxyXG5hcHAuYWxsKCcvJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcblx0Ly8gSnVzdCBzZW5kIHRoZSBpbmRleC5odG1sIGZvciBvdGhlciBmaWxlcyB0byBzdXBwb3J0IEhUTUw1TW9kZVxyXG5cdHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHsgcm9vdDogYXBwUm9vdCB9KTtcclxufSk7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKDg2MzQsICgpID0+IHtcclxuXHRjb25zdCBwb3J0ID0gc2VydmVyLmFkZHJlc3MoKS5wb3J0O1xyXG5cclxuXHRjb25zb2xlLmxvZygnRXhwcmVzcyBhcHAgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiVzLycsIHBvcnQpO1xyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzZXRVcFJlc3RBcGkoYXBwOiBFeHByZXNzKSB7XHJcblx0YXBwLmdldCgnL2FwaS90ZXN0JywgKHJlcSwgcmVzKSA9PiB7XHJcblx0XHRyZXMuc2VuZCgnSGVsbG8gV29ybGQhJyk7XHJcblx0fSk7XHJcblxyXG5cdGFwcC5nZXQoJy9hcGkvd2VhdGhlcicsIChyZXEsIHJlcykgPT4ge1xyXG5cdFx0cmVxLnBpcGUocmVxdWVzdC5nZXQoJ2h0dHA6Ly9tYXJzd2VhdGhlci5pbmdlbm9sb2d5LmNvbS92MS9sYXRlc3QvJykpXHJcblx0XHRcdC5waXBlKHJlcyk7XHJcblx0fSk7XHJcblxyXG5cdGFwcC5nZXQoJy9hcGkvd2VhdGhlci9hcmNoaXZlJywgKHJlcSwgcmVzKSA9PiB7XHJcblx0XHR2YXIgdGhpcnR5RGF5cyA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMDtcclxuXHRcdHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpIC0gdGhpcnR5RGF5cyk7XHJcblx0XHR2YXIgcXVlcnkgPSAndGVycmVzdHJpYWxfZGF0ZV9zdGFydD0nICsgZm9ybWF0RGF0ZShzdGFydERhdGUpICsgJyZ0ZXJyZXN0cmlhbF9kYXRlX2VuZD0nICsgZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcclxuXHRcdHJlcS5waXBlKHJlcXVlc3QuZ2V0KCdodHRwOi8vbWFyc3dlYXRoZXIuaW5nZW5vbG9neS5jb20vdjEvYXJjaGl2ZS8/JyArIHF1ZXJ5KSlcclxuXHRcdFx0LnBpcGUocmVzKTtcclxuXHJcblx0XHRmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpIHtcclxuXHRcdFx0dmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHR2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdFx0XHR2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0XHRcdHJldHVybiB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGFwcC5nZXQoJy9hcGkvcGhvdG9zJywgKHJlcSwgcmVzKSA9PiB7XHJcblx0XHRyZXEucGlwZShyZXF1ZXN0LmdldCgnaHR0cHM6Ly9hcGkubmFzYS5nb3YvbWFycy1waG90b3MvYXBpL3YxL3JvdmVycy9jdXJpb3NpdHkvcGhvdG9zP3NvbD0xMDAwJmFwaV9rZXk9REVNT19LRVknKSlcclxuXHRcdFx0LnBpcGUocmVzKTtcclxuXHR9KTtcclxuXHJcblx0YXBwLmdldCgnL2FwaS9uZXdzJywgKHJlcSwgcmVzKSA9PiB7XHJcblx0XHRyZXMuY29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRcdGNvbnN0IHRyYW5zZm9ybWVyID0gKCgpID0+IHtcclxuXHRcdFx0bGV0IGRhdGEgPSBbXTtcclxuXHRcdFx0cmV0dXJuIHsgdHJhbnNmb3JtOiBhZGRDaHVuaywgZmx1c2g6IHBhcnNlWG1sIH07XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBhZGRDaHVuayhjaHVuazogQnVmZmVyLCBlbmM6IHN0cmluZywgY2FsbGJhY2s6IChlcnI/OiBhbnksIGRhdGE/OiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goY2h1bmsudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gcGFyc2VYbWwoY2FsbGJhY2s6IChlcnI/OiBhbnksIGRhdGE/OiBhbnkpID0+IHZvaWQpIHtcclxuXHRcdFx0XHR4bWwyanMucGFyc2VTdHJpbmcoZGF0YS5qb2luKCcnKSwgeyBleHBsaWNpdEFycmF5OiBmYWxzZSB9LCAoZXJyLCBkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKVxyXG5cdFx0XHRcdFx0XHRjYWxsYmFjayhlcnIpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcblx0XHRcdFx0XHR0aGlzLnB1c2goanNvbik7XHJcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KSgpO1xyXG5cdFx0cmVxdWVzdC5nZXQoJ2h0dHA6Ly90d2l0cnNzLm1lL3R3aXR0ZXJfdXNlcl90b19yc3MvP3VzZXI9TWFyc0N1cmlvc2l0eSZmZXRjaD1GZXRjaCtSU1MnKVxyXG5cdFx0XHQvL2NvbnZlcnQgUlNTIFhNTCB0byBKU09OXHJcblx0XHRcdC5waXBlKHRocm91Z2gyKHRyYW5zZm9ybWVyLnRyYW5zZm9ybSwgdHJhbnNmb3JtZXIuZmx1c2gpKVxyXG5cdFx0XHQucGlwZShyZXMpO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBkdW1wKHZhbCkge1xyXG5cdFx0Y29uc29sZS5kaXIodmFsKTtcclxuXHRcdHJldHVybiB2YWw7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
