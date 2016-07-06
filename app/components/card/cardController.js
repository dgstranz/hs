'use strict';

/* Controllers */

angular.module('myApp.controllers.card', [])
	.controller('cardController', function($scope, $http) {
		$http.get('https://api.hearthstonejson.com/v1/latest/all/cards.json')
		.success(function(data, status, headers, config) {
			$scope.cards = data;
		})
		.error(function(data, status, headers, config) {
			console.log('error loading cards');
		});
	});