'use strict';

angular.module('boardGamrApp')
  .directive('gameSummary', function () {
    return {
      templateUrl: 'app/gameSummary/gameSummary.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });