/* global toastr:false, moment:false */
(function() {
  'use strict';

  function LoginController(logger, Auth, $state){
    var vm = this;
    vm.title = "Login";
    vm.creds = {
      email: '',
      password: '',
      remember: 0
    };
    vm.submit = submit;

    activate();

    function activate(){
      logger.info('LoginController Activated');
    }

    function submit(email, password, remember){
      logger.info('Logging in...')
      Auth.login(email, password, remember)
      .then(function(){
        logger.success('Welcome back!');
        $state.go('admin')
      })
    }
  }

  angular
    .module('app.core')
    .controller('LoginController', LoginController);
    LoginController.$inject = ['logger', 'Auth', '$state'];
})();
