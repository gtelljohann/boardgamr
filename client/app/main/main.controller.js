'use strict';

angular.module('boardGamrApp')
  .controller('MainCtrl', function($scope, $http, $modal, socket, gameFactory, bggApiFactory, recommendationFactory) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.allGames = gameFactory.query(function() {
      $scope.allGames.forEach(function(game) {
        //game.isChecked = true;
        //game.bggJSON = bggApiFactory.get({id:game.bggId})
      })
    });
    socket.syncUpdates('game', $scope.allGames);

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
    }

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
    }

    $scope.openModal = function(gameId) {
      console.log('hi')
      $scope.gctrl = {};
      $scope.gctrl.game = gameFactory.get({id:gameId});
      $scope.currentModal = $modal.open({
        templateUrl: 'app/game/game.html',
        scope: $scope
      });

    };

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', {
        name: $scope.newThing
      });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  });