import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';

@Component({
    selector: 'mars-app',
    templateUrl: 'app.html',
    directives: ROUTER_DIRECTIVES
})
@RouteConfig([
    { path: '/weather', component: WeatherComponent,    name: 'Weather', useAsDefault: true },
    { path: '/news',    component: NewsComponent,       name: 'News' },
    { path: '/photos',  component: PhotosComponent,     name: 'Photos' }
])
export class AppComponent {

}