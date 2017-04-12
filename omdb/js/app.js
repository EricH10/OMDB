'use strict';

/* App Module */

var movie = angular.module('movie', [
  'ngRoute',
  'searchServices',
  'movieCntl'
]);

movie.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'searchCntl'
      })
      .when('/info', {
        templateUrl: 'info.html',
        controller: 'infoCntl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
