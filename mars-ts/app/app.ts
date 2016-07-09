/// <reference path="app.d.ts" />

'use strict';
namespace mars {
  angular.module('MarsApp', [
    'angularChart', 
    'angular-carousel', 
    'ngMaterial', 
    'ngRoute', 
    'ngSanitize',
    'MarsApp.templates'
  ]).config(configureRoutes);

  function configureRoutes($routeProvider: angular.route.IRouteProvider, 
                           $locationProvider: ng.ILocationProvider) {
    $routeProvider
      .when('/weather', {
        templateUrl: 'weather/weather.html',
        controller: 'WeatherController',
        controllerAs: 'vm'
      })
      .when('/photos', {
        templateUrl: 'photos/photos.html',
        controller: 'PhotosController',
        controllerAs: 'vm'
      })
      .when('/news', {
        templateUrl: 'news/news.html',
        controller: 'NewsController',
        controllerAs: 'vm'
      })
      .otherwise('/weather');

    $locationProvider
      .html5Mode({
        enabled: false,
        requireBase: false
      });
  }
}