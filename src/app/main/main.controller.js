(function() {
  'use strict';

  angular
    .module('com.rtroncoso.todoapp.main')
    .controller('MainController', ['$scope', '$log', 'TodoService', 'toastr',
      function MainController($scope, $log, TodoService, toastr) {

        TodoService.get(null, function(err, data) {
          if(err) {
            toastr.error('Error: ' + err.message);
          }

          $scope.todos = data;
        });
        $scope.textTodo = '';

        $scope.submit = function() {
          if(!$scope.textTodo) {
            return toastr.info('Cannot submit an empty to-do!');
          }

          TodoService.insert($scope.textTodo, function(err, todo) {
            toastr.success('To-Do with id: ' + todo.id + ' successfully submitted!');
          });
        };

        $scope.remove = function(todo) {
          TodoService.remove(todo.id, function(err, id) {
            if(err) {
              return toastr.error('Error: ' + err.message);
            }

            toastr.success('To-Do with id: ' + todo.id + ' successfully removed!');
          });
        };

        $scope.complete = function(todo) {
          if(todo.completedAt) return toastr.error('Unexpected error occurred.');

          TodoService.toggle(todo.id, function(err, todo) {
            if(err) {
              return toastr.error('Error: ' + err.message);
            }

            toastr.success('To-Do with id: ' + todo.id + ' successfully completed!');
          })
        };

        $scope.restore = function(todo) {
          if(!todo.completedAt) return toastr.error('Unexpected error occurred.');

          TodoService.toggle(todo.id, function(err, todo) {
            if(err) {
              return toastr.error('Error: ' + err.message);
            }

            toastr.success('To-Do with id: ' + todo.id + ' successfully completed!');
          })
        };

    }]);

})();
