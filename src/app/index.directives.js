(function() {
  'use strict';

  angular
    .module('com.rtroncoso.todoapp')

    /**
     * Directive used for detecting enter key presses on inputs
     *
     * @author rt
     */
    .directive('ngEnter', function() {
      return function(scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
          if (event.which === 13) {
            scope.$apply(function () {
              scope.$eval(attrs.ngEnter, {'event': event});
            });

            event.preventDefault();
          }
        });
      }
    })

    /**
     * Directive for automatically focusing an input field
     *
     * @authro rtroncoso
     */
    .directive('autoFocus', function($timeout) {
      return {
        restrict: 'AC',
        link: function(_scope, _element) {
          $timeout(function(){
            _element[0].focus();
          }, 0);
        }
      };
    });

})();