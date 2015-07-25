'use strict';
(function(){
	angular.module('MarsApp')
		.controller('WeatherController', WeatherController);

	WeatherController.$inject = ['weatherService'];
	function WeatherController(weatherService) {
		var vm = this;
		vm.report = null;
		vm.chartOptions = {
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
			.then(function(data) {
				vm.report = data.report;
			});

		weatherService.getWeatherDataForLastMonth()
			.then(function(data) {
				var records = [];
				for (var i = data.results.length - 1; i >= 0; i--) {
					var record = data.results[i];
					record.date = record.sol + ' (' + record.terrestrial_date.substring(5) + ')'
					records.push(record);
				}
				vm.chartOptions.data = records;
				vm.pastData = records;
			});
	}
})();