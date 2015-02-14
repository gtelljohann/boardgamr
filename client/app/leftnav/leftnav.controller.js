'use strict';

angular.module('boardGamrApp')
  .controller('LeftnavCtrl', function ($scope, themeFactory, mechanicFactory) {
  	$scope.themes = themeFactory.query();
  	$scope.mechanics = mechanicFactory.query();
  });
