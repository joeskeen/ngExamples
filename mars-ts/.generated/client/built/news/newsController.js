'use strict';
var mars;
(function (mars) {
    var NewsController = (function () {
        /*! @ngInject */
        NewsController.$inject = ['newsService'];
        function NewsController(newsService) {
            var _this = this;
            this.news = null;
            newsService.getNews()
                .then(function (data) {
                _this.news = data;
                _this.news.rss.channel.item
                    .forEach(function (i) { return i.pubDate = new Date(i.pubDate); });
            });
        }
        return NewsController;
    }());
    angular.module('MarsApp')
        .controller('NewsController', NewsController);
})(mars || (mars = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MvbmV3c0NvbnRyb2xsZXIudHMiLCJuZXdzL25ld3NDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsSUFBVTtBQUFWLENBQUEsVUFBVSxNQUFLO0lBRWQsSUFBQSxrQkFBQSxZQUFBOzs7UUFJQyxTQUFBLGVBQVksYUFBd0I7WUFKckMsSUFBQSxRQUFBO1lBQ0MsS0FBQSxPQUFPO1lBSU4sWUFBWTtpQkFDVixLQUFLLFVBQUMsTUFBSTtnQkFDVixNQUFLLE9BQU87Z0JBQ1osTUFBSyxLQUFLLElBQUksUUFBUTtxQkFDcEIsUUFBUSxVQUFBLEdBQUMsRUFBSSxPQUFBLEVBQUUsVUFBVSxJQUFJLEtBQUssRUFBRTs7O1FBRzFDLE9BQUE7O0lBRUEsUUFBUSxPQUFPO1NBQ2IsV0FBVyxrQkFBa0I7R0FqQnRCLFNBQUEsT0FBSTtBQ21CZCIsImZpbGUiOiJuZXdzL25ld3NDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5uYW1lc3BhY2UgbWFycyB7XHJcblxyXG5cdGNsYXNzIE5ld3NDb250cm9sbGVyIHtcclxuXHRcdG5ld3MgPSBudWxsO1xyXG5cclxuXHRcdC8qISBAbmdJbmplY3QgKi9cclxuXHRcdGNvbnN0cnVjdG9yKG5ld3NTZXJ2aWNlOiBOZXdzU2VydmljZSkge1xyXG5cdFx0XHRuZXdzU2VydmljZS5nZXROZXdzKClcclxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5uZXdzID0gZGF0YTtcclxuXHRcdFx0XHRcdHRoaXMubmV3cy5yc3MuY2hhbm5lbC5pdGVtXHJcblx0XHRcdFx0XHRcdC5mb3JFYWNoKGkgPT4gaS5wdWJEYXRlID0gbmV3IERhdGUoaS5wdWJEYXRlKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhbmd1bGFyLm1vZHVsZSgnTWFyc0FwcCcpXHJcblx0XHQuY29udHJvbGxlcignTmV3c0NvbnRyb2xsZXInLCBOZXdzQ29udHJvbGxlcik7XHJcbn0iLCIndXNlIHN0cmljdCc7XG52YXIgbWFycztcbihmdW5jdGlvbiAobWFycykge1xuICAgIHZhciBOZXdzQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qISBAbmdJbmplY3QgKi9cbiAgICAgICAgZnVuY3Rpb24gTmV3c0NvbnRyb2xsZXIobmV3c1NlcnZpY2UpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLm5ld3MgPSBudWxsO1xuICAgICAgICAgICAgbmV3c1NlcnZpY2UuZ2V0TmV3cygpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5uZXdzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBfdGhpcy5uZXdzLnJzcy5jaGFubmVsLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkucHViRGF0ZSA9IG5ldyBEYXRlKGkucHViRGF0ZSk7IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5ld3NDb250cm9sbGVyO1xuICAgIH0oKSk7XG4gICAgYW5ndWxhci5tb2R1bGUoJ01hcnNBcHAnKVxuICAgICAgICAuY29udHJvbGxlcignTmV3c0NvbnRyb2xsZXInLCBOZXdzQ29udHJvbGxlcik7XG59KShtYXJzIHx8IChtYXJzID0ge30pKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
