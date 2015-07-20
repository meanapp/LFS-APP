'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TechCtrl
 * @description
 * # TechCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TechCtrl', function ($scope,Movie) {
    $scope.movies = Movie.getList().$object;
  });
