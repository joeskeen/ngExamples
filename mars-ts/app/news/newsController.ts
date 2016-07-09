'use strict';
namespace mars {

	class NewsController {
		news = null;

		/*! @ngInject */
		constructor(newsService: NewsService) {
			newsService.getNews()
				.then((data) => {
					this.news = data;
					this.news.rss.channel.item
						.forEach(i => i.pubDate = new Date(i.pubDate));
				});
		}
	}

	angular.module('MarsApp')
		.controller('NewsController', NewsController);
}