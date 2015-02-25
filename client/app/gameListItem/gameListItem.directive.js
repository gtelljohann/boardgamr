'use strict';

angular.module('boardGamrApp')
	.directive('gameListItem', function() {
		return {
			templateUrl: 'app/gameListItem/gameListItem.html',
			restrict: 'E'
		};
	});