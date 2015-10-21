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
      $localStorage.counter = $localStorage.counter || 1;
      $localStorage.todos = $localStorage.todos || {
        0: {
          id: 0,
          description: 'Example To-Do #1!',
          createdAt: Date.now(),
          completedAt: null,
          deletedAt: null
        }
      };

      /**
       * Obtains all the available todos in local storage
       *
       * @param query
       * @param cb
       * @returns {*}
       */
      var get = function(query, cb) {
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
          id: $localStorage.counter,
          description: description,
          createdAt: Date.now(),
          completedAt: null,
          deletedAt: null
        };

        $localStorage.todos[$localStorage.counter] = todo;
        $localStorage.counter++;
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
        var todo = $localStorage.todos[id];
        if(todo == undefined) {
          return cb(new Error('Index not found in array.'));
        }

        todo.deletedAt = Date.now();
        return cb(null, todo);
      };

      /**
       * Toggles a to-do completed status from completed to
       * not completed (depending on previous state)
       *
       * @param id
       * @param cb
       * @returns {*}
       */
      var toggle = function(id, cb) {
        var todo = $localStorage.todos[id];
        if(todo == undefined) {
          return cb(new Error('Index not found in array.'));
        }

        todo.completedAt = todo.completedAt ? null : Date.now();
        return cb(null, todo);
      }

      return {
        get: get,
        insert: insert,
        remove: remove,
        toggle: toggle
      };

    }]);

})();