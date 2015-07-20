'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {
   
    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:3000');
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tech', {
        templateUrl: 'views/tech.html',
        controller: 'TechCtrl'
      })
      .when('/create/movie', {
        templateUrl: 'views/tech-add.html',
        controller: 'TechAddCtrl'
      })
      .when('/tech/:id', {
        templateUrl: 'views/tech-view.html',
        controller: 'TechViewCtrl'
      })
      .when('/tech/:id/delete', {
        templateUrl: 'views/tech-delete.html',
        controller: 'TechDeleteCtrl'
      })
      .when('/tech/:id/edit', {
        templateUrl: 'views/tech-edit.html',
        controller: 'TechEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('tech');
  });
