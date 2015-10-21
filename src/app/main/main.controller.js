(function() {
  'use strict';

  angular
    .module('com.rtroncoso.todoapp.main')
    .controller('MainController', ['$scope', '$log', 'TodoService', 'toastr',
      function MainController($scope, $log, TodoService, toastr) {

        TodoService.get(null, function(err, data) {
          if(err) {
            toastr.error('Error' + err.message);
          }

          $scope.todos = data;
        });
        $scope.textTodo = '';

        $scope.submit = function() {
          if(!$scope.textTodo) {
            return toastr.info('Cannot submit an empty to-do!');
          }

          TodoService.insert($scope.textTodo);
        };

    }]);

})();
