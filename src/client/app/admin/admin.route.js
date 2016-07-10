(function() {
  'use strict';

  angular
    .module('app.admin')
    .run(appRun);

  appRun.$inject = ['routerHelper', 'Auth', '$location', '$rootScope'];
  /* @ngInject */
  function appRun(routerHelper, Auth, $location, $rootScope) {
    

    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'admin',
      config: {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'vm',
        title: 'Admin',
        settings: {
          nav: 2,
          content: '<i class="fa fa-lock"></i> Admin'
        }
      }
    }];
  }
})();
