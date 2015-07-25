'use strict';
(function(){
	angular.module('MarsApp')
		.controller('NewsController', NewsController);

	NewsController.$inject = ['newsService'];
	function NewsController(newsService) {
		var vm = this;
		vm.news = null;

		newsService.getNews()
			.then(function(data) {
				vm.news = data;
			});
	}
})();