'use strict';
(function(){
	angular.module('MarsApp')
		.service('photosService', PhotosService);

	PhotosService.$inject = ['$http'];
	function PhotosService($http) {
		return {
			getPhotos: getPhotos
		};

		function getPhotos() {
			var url = 'api/photos';
			return $http.get(url)
				.then(function(response) {
					return response.data;
				});
		}
	}
})();