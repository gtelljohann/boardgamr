'use strict';

angular.module('boardGamrApp')
  .directive('leftnav', function () {
    return {
      templateUrl: 'app/leftnav/leftnav.html',
      restrict: 'EA',
      controller: 'LeftnavCtrl'
    };
  });