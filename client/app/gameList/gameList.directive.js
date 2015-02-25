'use strict';

angular.module('boardGamrApp')
	.directive('gameList', function() {
		return {
			templateUrl: 'app/gameList/gameList.html',
			restrict: 'E'
		};
	});