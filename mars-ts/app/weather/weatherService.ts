'use strict';
namespace mars {

	export class WeatherService {
		/*! @ngInject */
		constructor(private $http: ng.IHttpService) { }

		getCurrentWeatherData() {
			var url = 'api/weather';
			return this.$http.get<{ report: IWeatherReport }>(url)
				.then((response) => response.data);
		}

		getWeatherDataForLastMonth() {
			var url = 'api/weather/archive';
			return this.$http.get<{ results: IWeatherReport[] }>(url)
				.then((response) => response.data);
		}
	}

	export interface IWeatherReport {
		terrestrial_date: string; // i.e. "2016-07-01"
		sol: number;
		ls: number;
		min_temp: number;
		min_temp_fahrenheit: number;
		max_temp: number;
		max_temp_fahrenheit: number;
		pressure: number;
		pressure_string: string; // i.e. "Lower";
		abs_humidity: any;
		wind_speed: any;
		wind_direction: string; // i.e. "--";
		atmo_opacity: string; // i.e. "Sunny";
		season: string; // i.e. "Month 6";
		sunrise: string; //i.e. "2016-07-01T10:20:00Z";
		sunset: string; //i.e. "2016-07-01T22:20:00Z";
	}

	angular.module('MarsApp')
		.service('weatherService', WeatherService);
}