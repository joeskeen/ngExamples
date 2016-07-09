'use strict';
namespace mars {
	class WeatherController {
		report = null;
		pastData = null;
		chartOptions = {
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

		/*! @ngInject */
		constructor(weatherService: WeatherService) {
			weatherService.getCurrentWeatherData()
				.then((data) => {
					this.report = data.report;
				});

			weatherService.getWeatherDataForLastMonth()
				.then((data) => {
					var records = [];
					for (var i = data.results.length - 1; i >= 0; i--) {
						var record: IAnnotatedWeatherReport = data.results[i];
						record.date = record.sol + ' (' + record.terrestrial_date.substring(5) + ')'
						records.push(record);
					}
					this.chartOptions.data = records;
					this.pastData = records;
				});
		}

	}

	interface IAnnotatedWeatherReport extends IWeatherReport {
		date?: string;
	}

	angular.module('MarsApp')
		.controller('WeatherController', WeatherController);
}