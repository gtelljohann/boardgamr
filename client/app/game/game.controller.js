'use strict';

angular.module('boardGamrApp')
  .controller('GameCtrl', function ($scope, $stateParams, gameFactory, bggApiFactory) {
    this.id = $stateParams.gameId;
    this.game = gameFactory.get({id:this.id});
  });
