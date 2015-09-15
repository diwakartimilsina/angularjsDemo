angular.module("PersonApp.controllers",[]).controller('PersonController', ['$scope','PersonService', function ($scope,PersonService){
			$scope.person = PersonService.getPerson();
			return $scope.person;
		}]);