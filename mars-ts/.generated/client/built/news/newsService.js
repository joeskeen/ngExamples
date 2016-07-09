'use strict';
var mars;
(function (mars) {
    var NewsService = (function () {
        /*! @ngInject */
        NewsService.$inject = ['$http'];
        function NewsService($http) {
            this.$http = $http;
        }
        NewsService.prototype.getNews = function () {
            var url = 'api/news';
            return this.$http.get(url)
                .then(function (response) { return response.data; });
        };
        return NewsService;
    }());
    mars.NewsService = NewsService;
    angular.module('MarsApp')
        .service('newsService', NewsService);
})(mars || (mars = {}));
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MvbmV3c1NlcnZpY2UudHMiLCJuZXdzL25ld3NTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsSUFBVTtBQUFWLENBQUEsVUFBVSxNQUFLO0lBRWQsSUFBQSxlQUFBLFlBQUE7OztRQUVDLFNBQUEsWUFBb0IsT0FBc0I7WUFBdEIsS0FBQSxRQUFBOztRQUVwQixZQUFBLFVBQUEsVUFBQSxZQUFBO1lBQ0MsSUFBSSxNQUFNO1lBQ1YsT0FBTyxLQUFLLE1BQU0sSUFBSTtpQkFDcEIsS0FBSyxVQUFDLFVBQVEsRUFBSyxPQUFBLFNBQVM7O1FBRWhDLE9BQUE7O0lBVGEsS0FBQSxjQUFXO0lBV3hCLFFBQVEsT0FBTztTQUNiLFFBQVEsZUFBZTtHQWRoQixTQUFBLE9BQUk7QUFlYjtBQ0lEIiwiZmlsZSI6Im5ld3MvbmV3c1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbm5hbWVzcGFjZSBtYXJzIHtcclxuXHJcblx0ZXhwb3J0IGNsYXNzIE5ld3NTZXJ2aWNlIHtcclxuXHRcdC8qISBAbmdJbmplY3QgKi9cclxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgJGh0dHA6IG5nLklIdHRwU2VydmljZSkgeyB9XHJcblxyXG5cdFx0Z2V0TmV3cygpIHtcclxuXHRcdFx0dmFyIHVybCA9ICdhcGkvbmV3cyc7XHJcblx0XHRcdHJldHVybiB0aGlzLiRodHRwLmdldCh1cmwpXHJcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFuZ3VsYXIubW9kdWxlKCdNYXJzQXBwJylcclxuXHRcdC5zZXJ2aWNlKCduZXdzU2VydmljZScsIE5ld3NTZXJ2aWNlKTtcclxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgbWFycztcbihmdW5jdGlvbiAobWFycykge1xuICAgIHZhciBOZXdzU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qISBAbmdJbmplY3QgKi9cbiAgICAgICAgZnVuY3Rpb24gTmV3c1NlcnZpY2UoJGh0dHApIHtcbiAgICAgICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICAgICAgfVxuICAgICAgICBOZXdzU2VydmljZS5wcm90b3R5cGUuZ2V0TmV3cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSAnYXBpL25ld3MnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmRhdGE7IH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTmV3c1NlcnZpY2U7XG4gICAgfSgpKTtcbiAgICBtYXJzLk5ld3NTZXJ2aWNlID0gTmV3c1NlcnZpY2U7XG4gICAgYW5ndWxhci5tb2R1bGUoJ01hcnNBcHAnKVxuICAgICAgICAuc2VydmljZSgnbmV3c1NlcnZpY2UnLCBOZXdzU2VydmljZSk7XG59KShtYXJzIHx8IChtYXJzID0ge30pKTtcbjtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
