'use strict';

angular.module('boardGamrApp')
  .directive('browseGameSummary', function () {
    return {
      templateUrl: 'app/browseGameSummary/browseGameSummary.html',
      restrict: 'EA'
    };
  });