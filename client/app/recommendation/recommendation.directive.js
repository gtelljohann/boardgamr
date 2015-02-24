'use strict';

angular.module('boardGamrApp')
  .directive('recommendation', function () {
    return {
      templateUrl: 'app/recommendation/recommendation.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });