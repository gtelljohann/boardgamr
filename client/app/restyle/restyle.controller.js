'use strict';

angular.module('boardGamrApp')
	.controller('RestyleCtrl', function($scope, $filter, gameFactory) {
		$scope.allGames = gameFactory.query();

	
	});