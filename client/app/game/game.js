'use strict';

angular.module('boardGamePandoraApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game/:gameId',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl as gctrl'
      });
  });