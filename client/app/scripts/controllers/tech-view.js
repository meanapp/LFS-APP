'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TechViewCtrl
 * @description
 * # TechViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('TechViewCtrl', function (
  $scope,
  $routeParams,
  Movie
) {
  $scope.viewMovie = true;
  $scope.movie = Movie.one($routeParams.id).get().$object;
});
