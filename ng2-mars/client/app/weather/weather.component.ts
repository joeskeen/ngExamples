import { Component, OnInit } from 'angular2/core';
import { WeatherService, IWeatherReport, IWeatherArchive } from './weather.service';
import { COMMON_DIRECTIVES } from 'angular2/common';

@Component({
    templateUrl: '/weather/weather.html',
    selector: 'mars-weather',
    providers: [ WeatherService ],
    directives: [ COMMON_DIRECTIVES ]
})
export class WeatherComponent implements OnInit {
    report: IWeatherReport;
    archive: IWeatherArchive;

    constructor(private _weatherService: WeatherService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this._weatherService.getCurrentWeatherData()
            .then(report => {
                this.report = report;
            }).catch(err => console.log('error', err));
        this._weatherService.getWeatherDataForLastMonth()
            .then(data => {
                console.log(data);
                this.archive = data;
            })
            .catch(err => console.log('error', err));;
    }
}