'use strict';
namespace mars {
	export class PhotosService {
		constructor(private $http: ng.IHttpService) {}

		getPhotos() {
			var url = 'api/photos';
			return this.$http.get<{ photos: IPhoto[]; }>(url)
				.then((response) => response.data);
		}
	}

	export interface IPhoto {
		img_src: string;
	}

	angular.module('MarsApp')
		.service('photosService', PhotosService);
}