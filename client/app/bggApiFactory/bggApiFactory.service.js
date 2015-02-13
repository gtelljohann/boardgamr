'use strict';

angular.module('boardGamePandoraApp')
  .factory('bggApiFactory', function($resource) {
    // Public API here
    return $resource('http://bgg-json.azurewebsites.net/thing/:id');
  });