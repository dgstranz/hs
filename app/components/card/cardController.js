'use strict';

app.controller('cardController', ['$scope', 'cardFactory', function($scope, cardFactory) {
	$scope.cards = [];
	cardFactory.getCards().success(function(data) {
		$scope.cards = data;
	}).error(function(data, status, headers, config) {
		console.log('Error loading cards.');
	});
	
	$scope.showCards = true; // Should be false in production
	
	$scope.query = {};

	$scope.submit = function(data) {
		$scope.query = angular.copy(data);
		$scope.showCards = true;
	};

	$scope.reset = function() {
		$scope.data = {};
	};

	$scope.reset();
}]);