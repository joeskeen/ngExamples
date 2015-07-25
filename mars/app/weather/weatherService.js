'use strict';
(function(){
	angular.module('MarsApp')
		.service('weatherService', WeatherService);

	WeatherService.$inject = ['$http'];
	function WeatherService($http) {
		return {
			getCurrentWeatherData: getCurrentWeatherData,
			getWeatherDataForLastMonth: getWeatherDataForLastMonth
		};

		function getCurrentWeatherData() {
			var url = 'api/weather';
			return $http.get(url)
				.then(function(response) {
					return response.data;
				});
		}

		function getWeatherDataForLastMonth() {
			var url = 'api/weather/archive';
			return $http.get(url)
				.then(function(response) {
					return response.data;
				});
		}
	}
})();