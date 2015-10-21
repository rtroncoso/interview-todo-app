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

      /**
       * Default To-Do's array definition and schema
       *
       * @type {*[]|*}
       */
      $localStorage.todos = $localStorage.todos || [
          {
            id: 0,
            description: 'Example To-Do #1!',
            createdAt: Date.now(),
            completedAt: null,
            deleteadAt: null
          }
        ];

      /**
       * Obtains all the available todos in local storage
       * checks for the type of the stored to-do's to be
       * an array and throws an error via the callback if
       * none was found
       *
       * @param query
       * @param cb
       * @returns {*}
       */
      var get = function(query, cb) {
        if(!Array.isArray($localStorage.todos)) {
          return cb(new Error('Array storage should not be empty'), []);
        }

        return cb(null, $localStorage.todos);
      };

      /**
       * Inserts a new to-do object into local storage,
       * setting it's creation datetime to the current
       * time and returning the created to-do object
       * using the param cb callback
       *
       * @param description
       * @param cb
       * @returns {*}
       */
      var insert = function(description, cb) {
        var todo = {
          id: $localStorage.todos.length + 1,
          description: description,
          createdAt: Date.now(),
          completedAt: null,
          deletedAt: null
        };

        $localStorage.todos.push(todo);
       return cb(null, todo);
      };

      /**
       * Finds and removes a to-do using a given id
       *
       * @param id
       * @param cb
       * @returns {*}
       */
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