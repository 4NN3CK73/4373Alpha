'use strict';

angular.module('4373AlphaClient')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
