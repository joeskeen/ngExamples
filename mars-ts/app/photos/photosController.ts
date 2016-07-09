'use strict';
namespace mars {
	class PhotosController {
		photos: IPhoto[] = null;

		constructor(photosService: PhotosService) {
			photosService.getPhotos()
				.then((data) => this.photos = data.photos);
		}

	}
	angular.module('MarsApp')
		.controller('PhotosController', PhotosController);
}