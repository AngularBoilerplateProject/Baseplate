/* global toastr:false, moment:false */
(function() {
  'use strict';

  function Auth(){
    var self = this;

    function isLoggedIn(){
      // Add whatever login logic necessary here.
      var res = false;
      
      return res;
    }
  }

  angular
    .module('app.core')
    .service('Auth', Auth);
})();
