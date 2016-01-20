import { Component, OnInit } from 'angular2/core';
import { NewsService, INews } from './news.service';
import { COMMON_DIRECTIVES } from 'angular2/common';

@Component({
    templateUrl: '/news/news.html',
    selector: 'mars-news',
    directives: COMMON_DIRECTIVES
})
export class NewsComponent implements OnInit {
  news: INews[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.newsService.getNews()
      .then(data => this.news = data);
  }
}