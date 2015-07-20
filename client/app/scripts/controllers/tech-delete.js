'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TechDeleteCtrl
 * @description
 * # TechDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TechDeleteCtrl', function (
  $scope,
  $routeParams,
  Movie,
  $location
) {
  $scope.movie = Movie.one($routeParams.id).get().$object;
  $scope.deleteTech = function() {
    $scope.movie.remove().then(function() {
      $location.path('/tech');
    });
  };
  $scope.back = function() {
    $location.path('/tech/' + $routeParams.id);
  };
});