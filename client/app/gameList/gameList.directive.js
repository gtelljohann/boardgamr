'use strict';

angular.module('boardGamePandoraApp')
	.directive('gameList', function() {
		return {
			templateUrl: 'app/gameList/gameList.html',
			restrict: 'E'
		};
	});