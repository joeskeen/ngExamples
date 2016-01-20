import { Component, OnInit } from 'angular2/core';
import { WeatherService } from './weather.service';
import * as models from './weather.models';
import { COMMON_DIRECTIVES } from 'angular2/common';

@Component({
    templateUrl: '/weather/weather.html',
    selector: 'mars-weather',
    providers: [ WeatherService ],
    directives: [ COMMON_DIRECTIVES ]
})
export class WeatherComponent implements OnInit {
    report: models.IWeatherReport;
    archive: models.IWeatherArchive;

    constructor(private _weatherService: WeatherService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this._weatherService.getCurrentWeatherData()
            .then(report => this.report = report);
        this._weatherService.getWeatherDataForLastMonth()
            .then(data => this.archive = data);
    }
}