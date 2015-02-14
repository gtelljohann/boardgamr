'use strict';

angular.module('boardGamrApp')
  .factory('gameFactory', function ($resource) {
    // Public API here
    return $resource('/api/games/:id');
  });
