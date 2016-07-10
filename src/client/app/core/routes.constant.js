// This is not very secure at all. So I would recomend keeping all private data
// behind an authed api endpoint.
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('privateRoutes', [
      '/admin',
      '/settings',
      '/'
    ])
})();
