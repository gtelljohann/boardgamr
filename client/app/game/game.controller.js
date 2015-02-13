'use strict';

angular.module('boardGamePandoraApp')
  .controller('GameCtrl', function ($scope, $stateParams, gameFactory, bggApiFactory) {
    this.id = $stateParams.gameId;
    this.game = gameFactory.get({id:this.id});
  });
