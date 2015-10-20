(function() {
  'use strict';

  angular
    .module('com.rtroncoso.todoapp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,
                  $locationProvider, $windowProvider) {
    // Enable html5 mode
    var $window = $windowProvider.$get();
    if($window.history && $window.history.pushState) {
      $locationProvider.html5Mode(true);
    }

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
