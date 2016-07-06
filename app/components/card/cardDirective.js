angular.module('myApp.directives.card', [])
.directive('card', function() {
	return {
		restrict: 'E',
		scope: {
			data: '='
		},
		templateUrl: 'components/card/cardView.html',
		link: function(scope, element, attrs) {
			console.log(element);
			element.onclick = function() {
				console.log(element);
				console.log(attrs);
			};
		},
		controller: function($scope) {
			console.log($scope.data);
		}
	}
});

