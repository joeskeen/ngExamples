'use strict';
namespace mars {

	export class NewsService {
		/*! @ngInject */
		constructor(private $http: ng.IHttpService) { }

		getNews() {
			var url = 'api/news';
			return this.$http.get(url)
				.then((response) => response.data);
		}
	}

	angular.module('MarsApp')
		.service('newsService', NewsService);
};