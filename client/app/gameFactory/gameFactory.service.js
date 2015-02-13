'use strict';

angular.module('boardGamePandoraApp')
  .factory('gameFactory', function ($resource) {
    // Public API here
    return $resource('/api/games/:id');
  });
