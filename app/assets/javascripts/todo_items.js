app = angular.module("TodoList", ["ngResource"])

function TodoCtrl($scope, $resource) {
	TodoItemService = $resource("/todo_items/:id", {id: "@id"})
	$scope.todos = TodoItemService.query()

	$scope.addTodo = function () {
		item = TodoItemService.save({title:$scope.formTodoText, done: false})
		$scope.todos.push(item);
		$scope.formTodoText = "";
		return false;
	}

	$scope.clearCompleted = function () {
		var templist = [];
    angular.forEach($scope.todos, function(item) {
      if(!item.done)
        templist.push(item);
      else
      	TodoItemService.delete(item)
    });
     $scope.todos = templist;
	}
}

