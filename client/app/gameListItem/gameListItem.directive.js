'use strict';

angular.module('boardGamePandoraApp')
	.directive('gameListItem', function() {
		return {
			templateUrl: 'app/gameListItem/gameListItem.html',
			restrict: 'E'
		};
	});