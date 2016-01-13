System.register(['angular2/core', './weather.service', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_1, common_1;
    var WeatherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            WeatherComponent = (function () {
                function WeatherComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherComponent.prototype.ngOnInit = function () {
                    this.loadData();
                };
                WeatherComponent.prototype.loadData = function () {
                    var _this = this;
                    this._weatherService.getCurrentWeatherData()
                        .then(function (report) {
                        _this.report = report;
                    }).catch(function (err) { return console.log('error', err); });
                    this._weatherService.getWeatherDataForLastMonth()
                        .then(function (data) {
                        console.log(data);
                        _this.archive = data;
                    })
                        .catch(function (err) { return console.log('error', err); });
                    ;
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/weather/weather.html',
                        selector: 'mars-weather',
                        providers: [weather_service_1.WeatherService],
                        directives: [common_1.COMMON_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherComponent);
                return WeatherComponent;
            })();
            exports_1("WeatherComponent", WeatherComponent);
        }
    }
});
//# sourceMappingURL=weather.component.js.map