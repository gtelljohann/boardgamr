'use strict';

angular.module('boardGamrApp')
  .factory('themeFactory', function ($resource) {
    return $resource('/api/themes/');
  });
