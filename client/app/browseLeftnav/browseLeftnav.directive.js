'use strict';

angular.module('boardGamrApp')
  .directive('browseLeftnav', function () {
    return {
      templateUrl: 'app/browseLeftnav/browseLeftnav.html',
      restrict: 'EA'
    };
  });