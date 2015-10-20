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

      $localStorage.todos = $localStorage.todos || [
          {
            id: 0,
            description: 'Example To-Do #1!',
            createdAt: Date.now(),
            deleteadAt: null
          }
        ];

      var get = function(query, cb) {
        if(!Array.isArray($localStorage.todos)) {
          return cb(new Error('Array storage should not be empty'));
        }

        return cb(null, $localStorage.todos);
      };

      var insert = function(description, cb) {
        $localStorage.todos.push({
          id: $localStorage.todos.length + 1,
          description: description,
          createdAt: Date.now(),
          deletedAt: null
        });

       return cb();
      };

      var remove = function(id, cb) {
        if($localStorage.todos[id] == undefined) {
          return cb(new Error('Index not found in array.'));
        }

        delete $localStorage.todos[id];
        return cb();
      };

      return {
        get: get,
        insert: insert,
        remove: remove
      };

    }]);

})();