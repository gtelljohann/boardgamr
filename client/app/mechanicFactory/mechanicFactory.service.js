'use strict';

angular.module('boardGamrApp')
  .factory('mechanicFactory', function ($resource) {
    return $resource('/api/mechanics');
  });
