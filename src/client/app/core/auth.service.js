/* global toastr:false, moment:false */
(function() {
  'use strict';

  function Auth($q, $http){
    var self = this;
    var authed = false
    self.isLoggedIn = isLoggedIn;
    self.login = login;

    function isLoggedIn(){
      // Add whatever login logic necessary here.

      return authed;
    }

    function login(email, password, remember){
      var defer = $q.defer();

      if(email && password){
        authed = true;
        defer.resolve();
      }

      return defer.promise;
    }
  }

  angular
    .module('app.core')
    .service('Auth', Auth);
    Auth.$inject = ['$q', '$http']
})();
