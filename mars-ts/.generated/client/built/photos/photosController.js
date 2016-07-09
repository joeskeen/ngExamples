'use strict';
var mars;
(function (mars) {
    var PhotosController = (function () {
        PhotosController.$inject = ['photosService'];
        function PhotosController(photosService) {
            var _this = this;
            this.photos = null;
            photosService.getPhotos()
                .then(function (data) { return _this.photos = data.photos; });
        }
        return PhotosController;
    }());
    angular.module('MarsApp')
        .controller('PhotosController', PhotosController);
})(mars || (mars = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3NDb250cm9sbGVyLnRzIiwicGhvdG9zL3Bob3Rvc0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFVO0FBQVYsQ0FBQSxVQUFVLE1BQUs7OzBEQUNkLElBQUEsb0JBQUEsWUFBQTtRQUdDLFNBQUEsaUJBQVksZUFBNEI7WUFIekMsSUFBQSxRQUFBO1lBQ0MsS0FBQSxTQUFtQjtZQUdsQixjQUFjO2lCQUNaLEtBQUssVUFBQyxNQUFJLEVBQUssT0FBQSxNQUFLLFNBQVMsS0FBSzs7UUFHdEMsT0FBQTs7SUFDQSxRQUFRLE9BQU87U0FDYixXQUFXLG9CQUFvQjtHQVh4QixTQUFBLE9BQUk7QUNjZCIsImZpbGUiOiJwaG90b3MvcGhvdG9zQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubmFtZXNwYWNlIG1hcnMge1xyXG5cdGNsYXNzIFBob3Rvc0NvbnRyb2xsZXIge1xyXG5cdFx0cGhvdG9zOiBJUGhvdG9bXSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IocGhvdG9zU2VydmljZTogUGhvdG9zU2VydmljZSkge1xyXG5cdFx0XHRwaG90b3NTZXJ2aWNlLmdldFBob3RvcygpXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHRoaXMucGhvdG9zID0gZGF0YS5waG90b3MpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0YW5ndWxhci5tb2R1bGUoJ01hcnNBcHAnKVxyXG5cdFx0LmNvbnRyb2xsZXIoJ1Bob3Rvc0NvbnRyb2xsZXInLCBQaG90b3NDb250cm9sbGVyKTtcclxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBtYXJzO1xuKGZ1bmN0aW9uIChtYXJzKSB7XG4gICAgdmFyIFBob3Rvc0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBQaG90b3NDb250cm9sbGVyKHBob3Rvc1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnBob3RvcyA9IG51bGw7XG4gICAgICAgICAgICBwaG90b3NTZXJ2aWNlLmdldFBob3RvcygpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF90aGlzLnBob3RvcyA9IGRhdGEucGhvdG9zOyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGhvdG9zQ29udHJvbGxlcjtcbiAgICB9KCkpO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdNYXJzQXBwJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ1Bob3Rvc0NvbnRyb2xsZXInLCBQaG90b3NDb250cm9sbGVyKTtcbn0pKG1hcnMgfHwgKG1hcnMgPSB7fSkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
