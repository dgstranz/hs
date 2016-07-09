'use strict';

app.directive('card', function() {
	return {
		restrict: 'E',
		scope: {
			cardinfo: '=',
			locale: '='
		},
		templateUrl: '/app/components/card/cardView.html',
		link: function(scope, element, attrs) {
			scope.lang = attrs.lang;
			console.log(attrs);
			element.onclick = function() {
				console.log(element);
			};
			//debugger
		},
		controller: function($scope) {
			console.log($scope.cardinfo);
			//console.log($scope.lang);
		}
	}
});

