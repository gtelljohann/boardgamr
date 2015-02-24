'use strict';

angular.module('boardGamrApp')
  .directive('topnav', function () {
    return {
      templateUrl: 'app/topnav/topnav.html',
      restrict: 'EA'
    };
  });