(function() {
  'use strict';
  angular
    .module('com.rtroncoso.todoapp.services')

    /**
     * Static Implementation using local storage for
     * Angular Interview to-do app
     *
     * @author rtroncoso
     */
    .factory('TodoService', ['$localStorage', function ($localStorage) {

      this.all = function() {

      };

      this.add = function(description) {
        $localStorage
      };

      this.delete = function(id) {

      };

      return this;

    }]);

})();