/// <reference path="app.d.ts" />
'use strict';
var mars;
(function (mars) {
    configureRoutes.$inject = ['$routeProvider', '$locationProvider'];
    angular.module('MarsApp', [
        'angularChart',
        'angular-carousel',
        'ngMaterial',
        'ngRoute',
        'ngSanitize',
        'MarsApp.templates'
    ]).config(configureRoutes);
    function configureRoutes($routeProvider, $locationProvider) {
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
})(mars || (mars = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBQ0EsSUFBVTs7dUVBQVYsQ0FBQSxVQUFVLE1BQUs7SUFDYixRQUFRLE9BQU8sV0FBVztRQUN4QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7T0FDQyxPQUFPO0lBRVYsU0FBQSxnQkFBeUIsZ0JBQ0EsbUJBQXVDO1FBQzlEO2FBQ0csS0FBSyxZQUFZO1lBQ2hCLGFBQWE7WUFDYixZQUFZO1lBQ1osY0FBYzs7YUFFZixLQUFLLFdBQVc7WUFDZixhQUFhO1lBQ2IsWUFBWTtZQUNaLGNBQWM7O2FBRWYsS0FBSyxTQUFTO1lBQ2IsYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjOzthQUVmLFVBQVU7UUFFYjthQUNHLFVBQVU7WUFDVCxTQUFTO1lBQ1QsYUFBYTs7O0dBakNYLFNBQUEsT0FBSTtBQ2tDZCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiYXBwLmQudHNcIiAvPlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5uYW1lc3BhY2UgbWFycyB7XHJcbiAgYW5ndWxhci5tb2R1bGUoJ01hcnNBcHAnLCBbXHJcbiAgICAnYW5ndWxhckNoYXJ0JywgXHJcbiAgICAnYW5ndWxhci1jYXJvdXNlbCcsIFxyXG4gICAgJ25nTWF0ZXJpYWwnLCBcclxuICAgICduZ1JvdXRlJywgXHJcbiAgICAnbmdTYW5pdGl6ZScsXHJcbiAgICAnTWFyc0FwcC50ZW1wbGF0ZXMnXHJcbiAgXSkuY29uZmlnKGNvbmZpZ3VyZVJvdXRlcyk7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZVJvdXRlcygkcm91dGVQcm92aWRlcjogYW5ndWxhci5yb3V0ZS5JUm91dGVQcm92aWRlciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhdGlvblByb3ZpZGVyOiBuZy5JTG9jYXRpb25Qcm92aWRlcikge1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuICAgICAgLndoZW4oJy93ZWF0aGVyJywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnd2VhdGhlci93ZWF0aGVyLmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdXZWF0aGVyQ29udHJvbGxlcicsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgIH0pXHJcbiAgICAgIC53aGVuKCcvcGhvdG9zJywge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGhvdG9zL3Bob3Rvcy5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnUGhvdG9zQ29udHJvbGxlcicsXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXHJcbiAgICAgIH0pXHJcbiAgICAgIC53aGVuKCcvbmV3cycsIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ25ld3MvbmV3cy5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnTmV3c0NvbnRyb2xsZXInLFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gICAgICB9KVxyXG4gICAgICAub3RoZXJ3aXNlKCcvd2VhdGhlcicpO1xyXG5cclxuICAgICRsb2NhdGlvblByb3ZpZGVyXHJcbiAgICAgIC5odG1sNU1vZGUoe1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcXVpcmVCYXNlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiYXBwLmQudHNcIiAvPlxuJ3VzZSBzdHJpY3QnO1xudmFyIG1hcnM7XG4oZnVuY3Rpb24gKG1hcnMpIHtcbiAgICBhbmd1bGFyLm1vZHVsZSgnTWFyc0FwcCcsIFtcbiAgICAgICAgJ2FuZ3VsYXJDaGFydCcsXG4gICAgICAgICdhbmd1bGFyLWNhcm91c2VsJyxcbiAgICAgICAgJ25nTWF0ZXJpYWwnLFxuICAgICAgICAnbmdSb3V0ZScsXG4gICAgICAgICduZ1Nhbml0aXplJyxcbiAgICAgICAgJ01hcnNBcHAudGVtcGxhdGVzJ1xuICAgIF0pLmNvbmZpZyhjb25maWd1cmVSb3V0ZXMpO1xuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVJvdXRlcygkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgICAgICAgJHJvdXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC53aGVuKCcvd2VhdGhlcicsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnd2VhdGhlci93ZWF0aGVyLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ1dlYXRoZXJDb250cm9sbGVyJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLndoZW4oJy9waG90b3MnLCB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3Bob3Rvcy9waG90b3MuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUGhvdG9zQ29udHJvbGxlcicsXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC53aGVuKCcvbmV3cycsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbmV3cy9uZXdzLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ05ld3NDb250cm9sbGVyJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICB9KVxuICAgICAgICAgICAgLm90aGVyd2lzZSgnL3dlYXRoZXInKTtcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXJcbiAgICAgICAgICAgIC5odG1sNU1vZGUoe1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICByZXF1aXJlQmFzZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufSkobWFycyB8fCAobWFycyA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
