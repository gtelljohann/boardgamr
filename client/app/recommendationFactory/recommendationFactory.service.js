'use strict';

angular.module('boardGamrApp')
  .factory('recommendationFactory', function() {

    function recommend(likes, others, num) {
      var recommendations = [];
      others.forEach(function(other) {
        var mechVal = 0;
        var themeVal = 0;
        likes.forEach(function(like) {
          console.log('like: ', like);
          like.mechanics.forEach(function(likeMech) {
            other.mechanics.forEach(function(otherMech) {
              // console.log('like: ', likeMech);
              // console.log('other: ', otherMech);
              if (likeMech._id == otherMech._id) {
                mechVal++;
                otherMech.bold = true;
                if (likeMech.isChecked) {
                  mechVal += 2;
                  otherMech.ital = true;
                }
              }
            })
          })
          like.themes.forEach(function(likeTheme) {
            other.themes.forEach(function(otherTheme) {
              // console.log('like', likeTheme);
              // console.log('other', otherTheme);
              if (likeTheme._id == otherTheme._id) {
                themeVal++;
                otherTheme.bold = true;
                if (likeTheme.isChecked) {
                  themeVal += 2;
                  otherTheme.ital = true;
                } 
              }
            })
          })
        })
        recommendations.push({
          value: mechVal + themeVal,
          game: other
        });
      });
      recommendations.sort(function(a, b) {
        return b.value - a.value;
      });
      if (num) recommendations = recommendations.slice(0, num);
      return recommendations;
    }


    // Public API here
    return recommend;
  });