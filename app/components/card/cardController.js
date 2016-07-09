'use strict';

app.controller('cardController', ['$scope', 'cardFactory', function($scope, cardFactory) {
	$scope.cards = [];
	cardFactory.getCards().success(function(data) {
		$scope.cards = data;
	}).error(function(data, status, headers, config) {
		console.log('Error loading cards.');
	});
	
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