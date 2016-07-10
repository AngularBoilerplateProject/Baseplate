(function() {
  'use strict';

  angular
    .module('app.core')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper, Auth, logger, privateRoutes, $location, $rootScope, $state) {
    var otherwise = '/404';
    $rootScope.$on('$stateChangeStart', function(event, data) {

      if (!Auth.isLoggedIn() && privateRoutes.indexOf(data.url) >= 0) {
        console.log('DENY');
        logger.error('You must login to view this page')
        event.preventDefault();
        $state.go('login');
      } else {
        console.log('ALLOW Route: ', data.url);

      }
    });
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [
      {
        state: '404',
        config: {
          url: '/404',
          templateUrl: 'app/core/404.html',
          title: '404'
        }
      }
    ];
  }
})();
