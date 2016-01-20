import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http';
import { AppComponent } from './app.component';
import { WeatherService } from './weather/weather.service';
import { NewsService } from './news/news.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    WeatherService,
    NewsService
]);