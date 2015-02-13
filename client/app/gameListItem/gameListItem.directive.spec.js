'use strict';

describe('Directive: gameListItem', function () {

  // load the directive's module and view
  beforeEach(module('boardGamePandoraApp'));
  beforeEach(module('app/gameListItem/gameListItem.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<game-list-item></game-list-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gameListItem directive');
  }));
});