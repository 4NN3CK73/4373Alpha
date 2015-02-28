'use strict';

// Declare app level module which depends on views, and components
angular.module('4373AlphaClient', [
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

console.log('Welcome to Yeogurt!');
