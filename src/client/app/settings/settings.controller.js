/* global toastr:false, moment:false */
(function() {
  'use strict';

  function SettingsController(logger, Auth, $state){
    var vm = this;
  }

  angular
    .module('app.core')
    .controller('SettingsController', SettingsController);
    SettingsController.$inject = ['logger', 'Auth', '$state'];
})();
