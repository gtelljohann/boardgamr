'use strict';

angular.module('boardGamrApp')
	.controller('BrowseCtrl', function($scope, gameFactory, themeFactory, mechanicFactory) {
		$scope.allGames = gameFactory.query();
		$scope.themes = themeFactory.query();
		$scope.mechanics = mechanicFactory.query();
		$scope.anyAllFilter = "all";
		$scope.showThemes = false;
		$scope.showMechanics = false;

		$scope.toggleShowThemes = function() {
			$scope.showThemes = !$scope.showThemes;
		}

		$scope.resetThemes = function() {
			$scope.themes.forEach(function(theme) {
				theme.isChecked = false;
			});
		}

		$scope.toggleShowMechanics = function() {
			$scope.showMechanics = !$scope.showMechanics;
		}

		$scope.resetMechanics = function() {
			$scope.mechanics.forEach(function(mechanic) {
				mechanic.isChecked = false;
			});
		}

		$scope.filterGames = function() {
			var filterThemes = $scope.themes.filter(function(theme) {
				return theme.isChecked;
			}).map(function(theme) {
				return theme.name;
			});
			var filterMechanics = $scope.mechanics.filter(function(mechanic) {
				return mechanic.isChecked;
			}).map(function(mechanic) {
				return mechanic.name;
			});
			console.log('themes: ', filterThemes);
			console.log('mechanics: ', filterMechanics);

			if (!filterThemes.length && !filterMechanics.length) return $scope.allGames;

			var results = $scope.allGames.filter(function(game) {
				var matchThemes = game.themes.filter(function(theme) {
					return (filterThemes.indexOf(theme.name) >= 0);
				});
				var matchMechanics = game.mechanics.filter(function(mechanic) {
					return (filterMechanics.indexOf(mechanic.name) >= 0);
				});

				if ($scope.anyAllFilter === "any") {
					return (matchThemes.length || matchMechanics.length);
				} else {
					return (matchThemes.length == filterThemes.length && matchMechanics.length == filterMechanics.length);
				}
			});

			return results;
		};
	});