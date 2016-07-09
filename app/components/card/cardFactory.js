'use strict';

app.factory('cardFactory', ['$http', function($http) {
	var cards = [];
	
	return {
		getCards: function() {
			return $http({
				url: 'https://api.hearthstonejson.com/v1/latest/all/cards.json',
				method: 'GET'
			});
		}
	};
}]);
