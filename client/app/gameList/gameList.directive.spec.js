'use strict';

describe('Directive: gameList', function () {

  // load the directive's module and view
  beforeEach(module('boardGamePandoraApp'));
  beforeEach(module('app/gameList/gameList.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<game-list></game-list>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gameList directive');
  }));
});