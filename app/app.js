'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers.card',
  'myApp.directives.card'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: '/app/partials/partial1.html', controller: 'cardController'});
  $routeProvider.when('/view2', {templateUrl: '/app/partials/partial2.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
