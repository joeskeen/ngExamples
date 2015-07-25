'use strict';
(function(){
	angular.module('MarsApp')
		.controller('PhotosController', PhotosController);

	PhotosController.$inject = ['photosService'];
	function PhotosController(photosService) {
		var vm = this;
		vm.photos = null;

		photosService.getPhotos()
			.then(function(data) {
				vm.photos = data.photos;
			});
	}
})();