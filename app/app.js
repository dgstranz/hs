'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/query', {templateUrl: '/app/partials/query.html', controller:'cardController'});
  $routeProvider.when('/deck', {templateUrl: '/app/partials/deck.html', controller:'cardController'});
  $routeProvider.otherwise({redirectTo: '/query'});
}]);
