'use strict';

app.controller('queryController', ['$scope', function($scope) {
	$scope.query = {};

	$scope.submit = function(data) {
		console.log('submit');
		$scope.query = angular.copy(data);
	};

	$scope.reset = function() {
		console.log('reset');
		$scope.data = {};
	};

	$scope.reset();
}]);