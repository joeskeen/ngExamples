import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs';

export interface IWeatherReport {
    sol: number;
    terrestrial_date: string;
    max_temp_fahrenheit: number;
    min_temp_fahrenheit: number;
    atmo_opacity: string;
}

export interface IWeatherArchive {
    count: number;
    next: string;
    previous: string;
    results: IArchiveEntry[];
}

export interface IArchiveEntry {
    terrestrial_date: string;
    sol: number;
    ls: number;
    min_temp: number;
    min_temp_fahrenheit: number;
    max_temp: number;
    max_temp_fahrenheit: number;
    pressure: number;
    pressure_string: string;
    abs_humidity: string;
    wind_speed: string;
    wind_direction: string;
    atmo_opacity: string;
    season: string;
    sunrise: string;
    sunset: string;
}

@Injectable()
export class WeatherService {
    private _http: Http;
    constructor(@Inject(Http) http: Http) {
        this._http = http;
    }

    getCurrentWeatherData() {
        var url = 'api/weather';
        return new Promise<IWeatherReport>(resolve => {
            this._http.get(url)
                .subscribe(response => resolve(response.json().report));
        });
    }

    getWeatherDataForLastMonth() {
        var url = 'api/weather/archive';
        return new Promise<IWeatherArchive>(resolve => {
            this._http.get(url)
                .subscribe(response => resolve(response.json()));
        });
    }
}