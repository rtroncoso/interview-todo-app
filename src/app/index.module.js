(function() {
  'use strict';

  angular
    .module('com.rtroncoso.todoapp',
    ['ngAnimate', 'ngCookies', 'ngSanitize',
      'ngAria', 'ui.router', 'ui.bootstrap',
      'toastr', 'ngStorage', 'angularMoment',
      'com.rtroncoso.todoapp.services',
      'com.rtroncoso.todoapp.main']);

})();
