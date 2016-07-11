'use strict';

app.controller('cardController', ['$scope', 'cardFactory', function($scope, cardFactory) {
	$scope.cards = [];
	cardFactory.getCards().success(function(data) {
		$scope.cards = data;
	}).error(function(data, status, headers, config) {
		console.log('Error loading cards.');
	});
	
	$scope.showCards = false; // Should be false in production
	
	$scope.query = {};

	$scope.submit = function(data) {
		$scope.query = angular.copy(data);
		$scope.showCards = true;
	};

	$scope.reset = function() {
		$scope.data = {};
	};

	$scope.reset();
	
	$scope.numberFields = ['cost', 'attack', 'health', 'durability'];
	
	$scope.cardFilter = function(card) {
		var query = $scope.query;
		var numberFields = ['cost', 'attack', 'health', 'durability'];
		var standardSets = ['CORE', 'EXPERT1', 'TGT', 'OG', 'BRM', 'LOE'];
		var output = true;
		
		Object.byString = function(o, s) {
			s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
			s = s.replace(/^\./, '');           // strip a leading dot
			var a = s.split('.');
			for (var i = 0, n = a.length; i < n; ++i) {
				var k = a[i];
				if (k in o) {
					o = o[k];
				} else {
					return;
				}
			}
			return o;
		}
		
		var exactValueFilter = function(card, queryAttr, cardAttr) {
			cardAttr = cardAttr || queryAttr;
			if(/^\d+$/.test(Object.byString(query, queryAttr))) {
				return Object.byString(card, cardAttr) == Object.byString(query, queryAttr);
			} else return true;
		};
		var minFilter = function(card, queryAttr, cardAttr) {
			cardAttr = cardAttr || queryAttr;
			if(/^\d+$/.test(Object.byString(query, queryAttr))) {
				return Object.byString(card, cardAttr) >= Object.byString(query, queryAttr);
			} else return true;
		};
		var maxFilter = function(card, queryAttr, cardAttr) {
			cardAttr = cardAttr || queryAttr;
			if(/^\d+$/.test(Object.byString(query, queryAttr))) {
				return Object.byString(card, cardAttr) <= Object.byString(query, queryAttr);
			} else return true;
		};
		var rangeFilter = function(card, attribute) {
			return minFilter(card, attribute + '.min', attribute) && maxFilter(card, attribute + '.max', attribute);
		};
		
		var numberFilter = function(card, attribute) {
			if(!query[attribute]) {
				return true;
			} else if(query[attribute].mode == 'exact') {
				return exactValueFilter(card, attribute + '.value', attribute);
			} else if(query[attribute].mode == 'range') {
				return rangeFilter(card, attribute);
			}
			return true;
		};
		
		//numberFields.forEach(function(field) {
		for (var i = 0; i < numberFields.length; i++) {
			if (!numberFilter(card, numberFields[i])) {
				return false;
			}
		};
		
		//return rangeFilter(card, 'cost');
		//return (card.set == query.set);
		return true;
	}
}]);