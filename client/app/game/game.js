'use strict';

angular.module('boardGamrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game/:gameId',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl as gctrl'
      });
  });