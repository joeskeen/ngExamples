'use strict';
(function() {
  angular.module('MarsApp', [
    'angularChart', 'angular-carousel', 'ngMaterial', 'ngRoute', 'ngSanitize'
  ])

  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/weather', {
          templateUrl: '/weather/weather.html',
          controller: 'WeatherController',
          controllerAs: 'vm'
        })
        .when('/photos', {
          templateUrl: '/photos/photos.html',
          controller: 'PhotosController',
          controllerAs: 'vm'
        })
        .when('/news', {
          templateUrl: '/news/news.html',
          controller: 'NewsController',
          controllerAs: 'vm'
        })
        .otherwise('/weather');

      $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        });
  }]);
})();