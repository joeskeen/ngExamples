'use strict';
var mars;
(function (mars) {
    var WeatherController = (function () {
        /*! @ngInject */
        WeatherController.$inject = ['weatherService'];
        function WeatherController(weatherService) {
            var _this = this;
            this.report = null;
            this.pastData = null;
            this.chartOptions = {
                data: [],
                dimensions: {
                    date: {
                        type: 'line',
                        axis: 'x',
                        name: 'date'
                    },
                    min_temp_fahrenheit: {
                        type: 'line',
                        axis: 'y',
                        name: 'low temp. (\u00B0F)'
                    },
                    max_temp_fahrenheit: {
                        type: 'line',
                        axis: 'y',
                        name: 'high temp. (\u00B0F)'
                    }
                }
            };
            weatherService.getCurrentWeatherData()
                .then(function (data) {
                _this.report = data.report;
            });
            weatherService.getWeatherDataForLastMonth()
                .then(function (data) {
                var records = [];
                for (var i = data.results.length - 1; i >= 0; i--) {
                    var record = data.results[i];
                    record.date = record.sol + ' (' + record.terrestrial_date.substring(5) + ')';
                    records.push(record);
                }
                _this.chartOptions.data = records;
                _this.pastData = records;
            });
        }
        return WeatherController;
    }());
    angular.module('MarsApp')
        .controller('WeatherController', WeatherController);
})(mars || (mars = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlckNvbnRyb2xsZXIudHMiLCJ3ZWF0aGVyL3dlYXRoZXJDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsSUFBVTtBQUFWLENBQUEsVUFBVSxNQUFLO0lBQ2QsSUFBQSxxQkFBQSxZQUFBOzs7UUF5QkMsU0FBQSxrQkFBWSxnQkFBOEI7WUF6QjNDLElBQUEsUUFBQTtZQUNDLEtBQUEsU0FBUztZQUNULEtBQUEsV0FBVztZQUNYLEtBQUEsZUFBZTtnQkFDZCxNQUFNO2dCQUNOLFlBQVk7b0JBQ1gsTUFBTTt3QkFDTCxNQUFNO3dCQUNOLE1BQU07d0JBQ04sTUFBTTs7b0JBRVAscUJBQXFCO3dCQUNwQixNQUFNO3dCQUNOLE1BQU07d0JBQ04sTUFBTTs7b0JBRVAscUJBQXFCO3dCQUNwQixNQUFNO3dCQUNOLE1BQU07d0JBQ04sTUFBTTs7OztZQU9SLGVBQWU7aUJBQ2IsS0FBSyxVQUFDLE1BQUk7Z0JBQ1YsTUFBSyxTQUFTLEtBQUs7O1lBR3JCLGVBQWU7aUJBQ2IsS0FBSyxVQUFDLE1BQUk7Z0JBQ1YsSUFBSSxVQUFVO2dCQUNkLEtBQUssSUFBSSxJQUFJLEtBQUssUUFBUSxTQUFTLEdBQUcsS0FBSyxHQUFHLEtBQUs7b0JBQ2xELElBQUksU0FBa0MsS0FBSyxRQUFRO29CQUNuRCxPQUFPLE9BQU8sT0FBTyxNQUFNLE9BQU8sT0FBTyxpQkFBaUIsVUFBVSxLQUFLO29CQUN6RSxRQUFRLEtBQUs7O2dCQUVkLE1BQUssYUFBYSxPQUFPO2dCQUN6QixNQUFLLFdBQVc7OztRQUlwQixPQUFBOztJQU1BLFFBQVEsT0FBTztTQUNiLFdBQVcscUJBQXFCO0dBcER6QixTQUFBLE9BQUk7QUNpRGQiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubmFtZXNwYWNlIG1hcnMge1xyXG5cdGNsYXNzIFdlYXRoZXJDb250cm9sbGVyIHtcclxuXHRcdHJlcG9ydCA9IG51bGw7XHJcblx0XHRwYXN0RGF0YSA9IG51bGw7XHJcblx0XHRjaGFydE9wdGlvbnMgPSB7XHJcblx0XHRcdGRhdGE6IFtdLFxyXG5cdFx0XHRkaW1lbnNpb25zOiB7XHJcblx0XHRcdFx0ZGF0ZToge1xyXG5cdFx0XHRcdFx0dHlwZTogJ2xpbmUnLFxyXG5cdFx0XHRcdFx0YXhpczogJ3gnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ2RhdGUnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtaW5fdGVtcF9mYWhyZW5oZWl0OiB7XHJcblx0XHRcdFx0XHR0eXBlOiAnbGluZScsXHJcblx0XHRcdFx0XHRheGlzOiAneScsXHJcblx0XHRcdFx0XHRuYW1lOiAnbG93IHRlbXAuIChcXHUwMEIwRiknXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtYXhfdGVtcF9mYWhyZW5oZWl0OiB7XHJcblx0XHRcdFx0XHR0eXBlOiAnbGluZScsXHJcblx0XHRcdFx0XHRheGlzOiAneScsXHJcblx0XHRcdFx0XHRuYW1lOiAnaGlnaCB0ZW1wLiAoXFx1MDBCMEYpJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKiEgQG5nSW5qZWN0ICovXHJcblx0XHRjb25zdHJ1Y3Rvcih3ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHtcclxuXHRcdFx0d2VhdGhlclNlcnZpY2UuZ2V0Q3VycmVudFdlYXRoZXJEYXRhKClcclxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yZXBvcnQgPSBkYXRhLnJlcG9ydDtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdHdlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXJEYXRhRm9yTGFzdE1vbnRoKClcclxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0dmFyIHJlY29yZHMgPSBbXTtcclxuXHRcdFx0XHRcdGZvciAodmFyIGkgPSBkYXRhLnJlc3VsdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdFx0XHRcdFx0dmFyIHJlY29yZDogSUFubm90YXRlZFdlYXRoZXJSZXBvcnQgPSBkYXRhLnJlc3VsdHNbaV07XHJcblx0XHRcdFx0XHRcdHJlY29yZC5kYXRlID0gcmVjb3JkLnNvbCArICcgKCcgKyByZWNvcmQudGVycmVzdHJpYWxfZGF0ZS5zdWJzdHJpbmcoNSkgKyAnKSdcclxuXHRcdFx0XHRcdFx0cmVjb3Jkcy5wdXNoKHJlY29yZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmNoYXJ0T3B0aW9ucy5kYXRhID0gcmVjb3JkcztcclxuXHRcdFx0XHRcdHRoaXMucGFzdERhdGEgPSByZWNvcmRzO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGludGVyZmFjZSBJQW5ub3RhdGVkV2VhdGhlclJlcG9ydCBleHRlbmRzIElXZWF0aGVyUmVwb3J0IHtcclxuXHRcdGRhdGU/OiBzdHJpbmc7XHJcblx0fVxyXG5cclxuXHRhbmd1bGFyLm1vZHVsZSgnTWFyc0FwcCcpXHJcblx0XHQuY29udHJvbGxlcignV2VhdGhlckNvbnRyb2xsZXInLCBXZWF0aGVyQ29udHJvbGxlcik7XHJcbn0iLCIndXNlIHN0cmljdCc7XG52YXIgbWFycztcbihmdW5jdGlvbiAobWFycykge1xuICAgIHZhciBXZWF0aGVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qISBAbmdJbmplY3QgKi9cbiAgICAgICAgZnVuY3Rpb24gV2VhdGhlckNvbnRyb2xsZXIod2VhdGhlclNlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBhc3REYXRhID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogJ3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RhdGUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1pbl90ZW1wX2ZhaHJlbmhlaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXM6ICd5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb3cgdGVtcC4gKFxcdTAwQjBGKSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWF4X3RlbXBfZmFocmVuaGVpdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpczogJ3knLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hpZ2ggdGVtcC4gKFxcdTAwQjBGKSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3ZWF0aGVyU2VydmljZS5nZXRDdXJyZW50V2VhdGhlckRhdGEoKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVwb3J0ID0gZGF0YS5yZXBvcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXJEYXRhRm9yTGFzdE1vbnRoKClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciByZWNvcmRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGRhdGEucmVzdWx0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gZGF0YS5yZXN1bHRzW2ldO1xuICAgICAgICAgICAgICAgICAgICByZWNvcmQuZGF0ZSA9IHJlY29yZC5zb2wgKyAnICgnICsgcmVjb3JkLnRlcnJlc3RyaWFsX2RhdGUuc3Vic3RyaW5nKDUpICsgJyknO1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhcnRPcHRpb25zLmRhdGEgPSByZWNvcmRzO1xuICAgICAgICAgICAgICAgIF90aGlzLnBhc3REYXRhID0gcmVjb3JkcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBXZWF0aGVyQ29udHJvbGxlcjtcbiAgICB9KCkpO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdNYXJzQXBwJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1dlYXRoZXJDb250cm9sbGVyJywgV2VhdGhlckNvbnRyb2xsZXIpO1xufSkobWFycyB8fCAobWFycyA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
