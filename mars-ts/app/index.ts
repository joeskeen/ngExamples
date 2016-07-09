'use strict';
namespace mars {
  
  class MainController {

    menuItems: IMenuItem[] = [
      { name: 'Martian Weather', iconClass: 'certificate', path: '/weather' },
      { name: 'Martian Photos', iconClass: 'picture-o', path: '/photos' },
      { name: 'Martian News', iconClass: 'newspaper-o', path: '/news' }
    ];

    /*! @ngInject */
    constructor(private $mdSidenav: angular.material.MDSidenavService, 
                private $location: ng.ILocationService) {
    }

    toggleSidenav(name: string) {
      this.$mdSidenav(name).toggle();
    }

    selectMenuItem(menuItem: IMenuItem) {
      this.$location.path(menuItem.path);
    }
  }

  interface IMenuItem {
    name: string;
    iconClass: string;
    path: string;
  }

  angular.module('MarsApp')
    .controller('MainController', MainController);
}