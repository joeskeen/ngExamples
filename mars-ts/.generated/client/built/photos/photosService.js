'use strict';
var mars;
(function (mars) {
    var PhotosService = (function () {
        PhotosService.$inject = ['$http'];
        function PhotosService($http) {
            this.$http = $http;
        }
        PhotosService.prototype.getPhotos = function () {
            var url = 'api/photos';
            return this.$http.get(url)
                .then(function (response) { return response.data; });
        };
        return PhotosService;
    }());
    mars.PhotosService = PhotosService;
    angular.module('MarsApp')
        .service('photosService', PhotosService);
})(mars || (mars = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3NTZXJ2aWNlLnRzIiwicGhvdG9zL3Bob3Rvc1NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFVO0FBQVYsQ0FBQSxVQUFVLE1BQUs7OytDQUNkLElBQUEsaUJBQUEsWUFBQTtRQUNDLFNBQUEsY0FBb0IsT0FBc0I7WUFBdEIsS0FBQSxRQUFBOztRQUVwQixjQUFBLFVBQUEsWUFBQSxZQUFBO1lBQ0MsSUFBSSxNQUFNO1lBQ1YsT0FBTyxLQUFLLE1BQU0sSUFBMkI7aUJBQzNDLEtBQUssVUFBQyxVQUFRLEVBQUssT0FBQSxTQUFTOztRQUVoQyxPQUFBOztJQVJhLEtBQUEsZ0JBQWE7SUFjMUIsUUFBUSxPQUFPO1NBQ2IsUUFBUSxpQkFBaUI7R0FoQmxCLFNBQUEsT0FBSTtBQ2lCZCIsImZpbGUiOiJwaG90b3MvcGhvdG9zU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubmFtZXNwYWNlIG1hcnMge1xyXG5cdGV4cG9ydCBjbGFzcyBQaG90b3NTZXJ2aWNlIHtcclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IG5nLklIdHRwU2VydmljZSkge31cclxuXHJcblx0XHRnZXRQaG90b3MoKSB7XHJcblx0XHRcdHZhciB1cmwgPSAnYXBpL3Bob3Rvcyc7XHJcblx0XHRcdHJldHVybiB0aGlzLiRodHRwLmdldDx7IHBob3RvczogSVBob3RvW107IH0+KHVybClcclxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJUGhvdG8ge1xyXG5cdFx0aW1nX3NyYzogc3RyaW5nO1xyXG5cdH1cclxuXHJcblx0YW5ndWxhci5tb2R1bGUoJ01hcnNBcHAnKVxyXG5cdFx0LnNlcnZpY2UoJ3Bob3Rvc1NlcnZpY2UnLCBQaG90b3NTZXJ2aWNlKTtcclxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBtYXJzO1xuKGZ1bmN0aW9uIChtYXJzKSB7XG4gICAgdmFyIFBob3Rvc1NlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBQaG90b3NTZXJ2aWNlKCRodHRwKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIH1cbiAgICAgICAgUGhvdG9zU2VydmljZS5wcm90b3R5cGUuZ2V0UGhvdG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVybCA9ICdhcGkvcGhvdG9zJztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5kYXRhOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFBob3Rvc1NlcnZpY2U7XG4gICAgfSgpKTtcbiAgICBtYXJzLlBob3Rvc1NlcnZpY2UgPSBQaG90b3NTZXJ2aWNlO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdNYXJzQXBwJylcbiAgICAgICAgLnNlcnZpY2UoJ3Bob3Rvc1NlcnZpY2UnLCBQaG90b3NTZXJ2aWNlKTtcbn0pKG1hcnMgfHwgKG1hcnMgPSB7fSkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
