(function() {
  'use strict';

  angular
    .module('com.rtroncoso.todoapp.main')
    .controller('MainController', ['$scope', 'TodoService',
      function MainController($scope, TodoService) {

        $scope.todos = TodoService.all();
        $scope.textTodo = '';

        $scope.submit = function() {
          alert('form submitted! :D');
        };

    }]);

})();
