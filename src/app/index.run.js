(function() {
  'use strict';

  angular
    .module('com.rtroncoso.todoapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
