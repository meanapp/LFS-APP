'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TechAddCtrl
 * @description
 * # TechAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('TechAddCtrl', function (
  $scope,
  Movie,
  $location
) {
   $scope.movie = {};
  $scope.saveMovie = function() {
    Movie.post($scope.movie).then(function() {
      $location.path('/tech');
    });
  };
});
