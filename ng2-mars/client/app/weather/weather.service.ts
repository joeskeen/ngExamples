import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs';
import { BaseDataService } from '../common/baseData.service';
import * as models from './weather.models';

@Injectable()
export class WeatherService extends BaseDataService {
    constructor(@Inject(Http) http: Http) {
        super(http);
    }

    getCurrentWeatherData() {
        var url = 'api/weather';
        return this.getObject<{ report: models.IWeatherReport }>(url)
                   .then(data => data.report);
    }

    getWeatherDataForLastMonth() {
        var url = 'api/weather/archive';
        return this.getObject<models.IWeatherArchive>(url);
    }
}