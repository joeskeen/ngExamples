'use strict';
var mars;
(function (mars) {
    var MainController = (function () {
        /*! @ngInject */
        MainController.$inject = ['$mdSidenav', '$location'];
        function MainController($mdSidenav, $location) {
            this.$mdSidenav = $mdSidenav;
            this.$location = $location;
            this.menuItems = [
                { name: 'Martian Weather', iconClass: 'certificate', path: '/weather' },
                { name: 'Martian Photos', iconClass: 'picture-o', path: '/photos' },
                { name: 'Martian News', iconClass: 'newspaper-o', path: '/news' }
            ];
        }
        MainController.prototype.toggleSidenav = function (name) {
            this.$mdSidenav(name).toggle();
        };
        MainController.prototype.selectMenuItem = function (menuItem) {
            this.$location.path(menuItem.path);
        };
        return MainController;
    }());
    angular.module('MarsApp')
        .controller('MainController', MainController);
})(mars || (mars = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFVO0FBQVYsQ0FBQSxVQUFVLE1BQUs7SUFFYixJQUFBLGtCQUFBLFlBQUE7OztRQVNFLFNBQUEsZUFBb0IsWUFDQSxXQUE4QjtZQUQ5QixLQUFBLGFBQUE7WUFDQSxLQUFBLFlBQUE7WUFScEIsS0FBQSxZQUF5QjtnQkFDdkIsRUFBRSxNQUFNLG1CQUFtQixXQUFXLGVBQWUsTUFBTTtnQkFDM0QsRUFBRSxNQUFNLGtCQUFrQixXQUFXLGFBQWEsTUFBTTtnQkFDeEQsRUFBRSxNQUFNLGdCQUFnQixXQUFXLGVBQWUsTUFBTTs7O1FBUTFELGVBQUEsVUFBQSxnQkFBQSxVQUFjLE1BQVk7WUFDeEIsS0FBSyxXQUFXLE1BQU07O1FBR3hCLGVBQUEsVUFBQSxpQkFBQSxVQUFlLFVBQW1CO1lBQ2hDLEtBQUssVUFBVSxLQUFLLFNBQVM7O1FBRWpDLE9BQUE7O0lBUUEsUUFBUSxPQUFPO1NBQ1osV0FBVyxrQkFBa0I7R0EvQnhCLFNBQUEsT0FBSTtBQ3dCZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubmFtZXNwYWNlIG1hcnMge1xyXG4gIFxyXG4gIGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuXHJcbiAgICBtZW51SXRlbXM6IElNZW51SXRlbVtdID0gW1xyXG4gICAgICB7IG5hbWU6ICdNYXJ0aWFuIFdlYXRoZXInLCBpY29uQ2xhc3M6ICdjZXJ0aWZpY2F0ZScsIHBhdGg6ICcvd2VhdGhlcicgfSxcclxuICAgICAgeyBuYW1lOiAnTWFydGlhbiBQaG90b3MnLCBpY29uQ2xhc3M6ICdwaWN0dXJlLW8nLCBwYXRoOiAnL3Bob3RvcycgfSxcclxuICAgICAgeyBuYW1lOiAnTWFydGlhbiBOZXdzJywgaWNvbkNsYXNzOiAnbmV3c3BhcGVyLW8nLCBwYXRoOiAnL25ld3MnIH1cclxuICAgIF07XHJcblxyXG4gICAgLyohIEBuZ0luamVjdCAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSAkbWRTaWRlbmF2OiBhbmd1bGFyLm1hdGVyaWFsLk1EU2lkZW5hdlNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSAkbG9jYXRpb246IG5nLklMb2NhdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTaWRlbmF2KG5hbWU6IHN0cmluZykge1xyXG4gICAgICB0aGlzLiRtZFNpZGVuYXYobmFtZSkudG9nZ2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0TWVudUl0ZW0obWVudUl0ZW06IElNZW51SXRlbSkge1xyXG4gICAgICB0aGlzLiRsb2NhdGlvbi5wYXRoKG1lbnVJdGVtLnBhdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW50ZXJmYWNlIElNZW51SXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZztcclxuICAgIHBhdGg6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKCdNYXJzQXBwJylcclxuICAgIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKTtcclxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBtYXJzO1xuKGZ1bmN0aW9uIChtYXJzKSB7XG4gICAgdmFyIE1haW5Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyohIEBuZ0luamVjdCAqL1xuICAgICAgICBmdW5jdGlvbiBNYWluQ29udHJvbGxlcigkbWRTaWRlbmF2LCAkbG9jYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuJG1kU2lkZW5hdiA9ICRtZFNpZGVuYXY7XG4gICAgICAgICAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICAgICAgICAgIHRoaXMubWVudUl0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01hcnRpYW4gV2VhdGhlcicsIGljb25DbGFzczogJ2NlcnRpZmljYXRlJywgcGF0aDogJy93ZWF0aGVyJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01hcnRpYW4gUGhvdG9zJywgaWNvbkNsYXNzOiAncGljdHVyZS1vJywgcGF0aDogJy9waG90b3MnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTWFydGlhbiBOZXdzJywgaWNvbkNsYXNzOiAnbmV3c3BhcGVyLW8nLCBwYXRoOiAnL25ld3MnIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgTWFpbkNvbnRyb2xsZXIucHJvdG90eXBlLnRvZ2dsZVNpZGVuYXYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdGhpcy4kbWRTaWRlbmF2KG5hbWUpLnRvZ2dsZSgpO1xuICAgICAgICB9O1xuICAgICAgICBNYWluQ29udHJvbGxlci5wcm90b3R5cGUuc2VsZWN0TWVudUl0ZW0gPSBmdW5jdGlvbiAobWVudUl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgobWVudUl0ZW0ucGF0aCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNYWluQ29udHJvbGxlcjtcbiAgICB9KCkpO1xuICAgIGFuZ3VsYXIubW9kdWxlKCdNYXJzQXBwJylcbiAgICAgICAgLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xufSkobWFycyB8fCAobWFycyA9IHt9KSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
