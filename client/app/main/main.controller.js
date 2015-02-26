'use strict';

angular.module('boardGamrApp')
  .controller('MainCtrl', function($scope, $http, $modal, socket, gameFactory, bggApiFactory, recommendationFactory) {

    $scope.allGames = gameFactory.query(function() {
      $scope.allGames.forEach(function(game) {
        //game.isChecked = true;
        //game.bggJSON = bggApiFactory.get({id:game.bggId})
      })
    });
    socket.syncUpdates('game', $scope.allGames);

    $scope.togglePreference = function(game) {
      game.isChecked = !game.isChecked;
    };

    $scope.gameSearch = function(text) {
      var results = text ? $scope.allGames.filter(createFilterFor(text)) : [];
      results.sort
      return results;
    }

    function createFilterFor(query) {
      var lowercaseQuery = query.toLowerCase();
      return function filterFn(game) {
        return (game.name.toLowerCase().indexOf(lowercaseQuery) >= 0);
      };
    }

    $scope.recommend = function() {
      var likes = [];
      var others = [];
      $scope.allGames.forEach(function(game) {
        if (game.isChecked) {
          likes.push(game);
        } else {
          others.push(game);
        }
        game.mechanics.forEach(function(mech) {
          mech.bold = false;
          mech.ital = false;
        });
        game.themes.forEach(function(theme) {
          theme.bold = false;
          theme.ital = false;
        });
      });
      $scope.recommendations = recommendationFactory(likes, others, 3);
      $scope.showRecs = true;
      window.scrollTo(0,0);
    };

    $scope.reset = function() {
      $scope.allGames.forEach(function(game) {
        game.isChecked = false;
        game.mechanics.forEach(function(mech) {
          mech.isChecked = false;
          mech.bold = false;
          mech.ital = false;
        });
        game.themes.forEach(function(theme) {
          theme.isChecked = false;
          theme.bold = false;
          theme.ital = false;
        });
      });
      $scope.recommendations = [];
      $scope.showRecs = false;
    };

    $scope.openModal = function(gameId) {
      $scope.gctrl = {};
      $scope.gctrl.game = gameFactory.get({
        id: gameId
      });
      $scope.currentModal = $modal.open({
        templateUrl: 'app/game/game.html',
        scope: $scope
      });

    };

  });