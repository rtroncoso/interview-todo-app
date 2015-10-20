(function() {
  'use strict';

  angular
    .module('com.rtroncoso.todoapp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,
                        $locationProvider) {
    if(window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
