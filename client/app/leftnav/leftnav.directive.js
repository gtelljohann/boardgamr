'use strict';

angular.module('boardGamrApp')
  .directive('leftnav', function () {
    return {
      templateUrl: 'app/leftnav/leftnav.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });