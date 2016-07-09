/* global toastr:false, moment:false */
(function() {
  'use strict';

  function LoginController(logger){
    var vm = this;
    vm.title = "Login";
    
    activate();

    function activate(){
      logger.info('LoginController Activated');
    }
  }

  angular
    .module('app.core')
    .controller('LoginController', LoginController);
    LoginController.$inject = ['logger'];
})();
