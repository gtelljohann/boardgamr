'use strict';

angular.module('boardGamrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restyle', {
        url: '/restyle',
        templateUrl: 'app/restyle/restyle.html',
        controller: 'RestyleCtrl'
      });
  });