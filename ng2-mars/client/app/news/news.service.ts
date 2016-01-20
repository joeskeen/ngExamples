/// <reference path="../../typings/tsd.d.ts" />

import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs';
import { BaseDataService } from '../common/baseData.service';
//import * as models from './news.models';
//import * as xml2js from 'xml2js';
declare var $: JQueryStatic;

@Injectable()
export class NewsService extends BaseDataService {
    constructor(@Inject(Http) http: Http) {
        super(http);
    }

    getNews() {
        const url = 'api/news';
        return this.getString(url)
          .then(data => $.parseXML(data))
          .then(data => {
            console.dir(data);
            const news: INews[] = [];
            $('channel item', data).each((i,e) => {
              news.push({
                link: $('link', e).text(),
                pubDate: $('pubDate', e).text(),
                description: $('description', e).text(),
                author: $('creator', e).text()
              })
            });
            return news;
          });
  //      const parser = xml2js.Parser;
        // return new Promise<any>((resolve, reject) => {

        //       .then(resolve, reject);
        //       // .then(data => xml2js.parseString(data, (err, result) => {
        //       //   if (err) {
        //       //     reject(err);
        //       //     throw err;
        //       //   }
        //       //   resolve(result);
        //       // }));
        // });
    }
}

export interface INews {
  link: string;
  pubDate: string;
  author: string;
  description: string;
}