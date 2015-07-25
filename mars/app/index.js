'use strict';
(function(){
  angular.module('MarsApp')
    .controller('MainController', MainController);
  MainController.$inject = [ '$mdSidenav', '$location' ];
  function MainController($mdSidenav, $location) {

    var menuItems = [
      { name: 'Martian Weather', iconClass: 'certificate', path: '/weather' },
      { name: 'Martian Photos', iconClass: 'picture-o', path: '/photos' },
      { name: 'Martian News', iconClass: 'newspaper-o', path: '/news' }
    ];

    return {
      menuItems: menuItems,
      toggleSidenav: toggleSidenav,
      selectMenuItem: selectMenuItem
    };

    function toggleSidenav(name) {
      $mdSidenav(name).toggle();
    }

    function selectMenuItem(menuItem) {
      $location.path(menuItem.path);
    }
  }
})();