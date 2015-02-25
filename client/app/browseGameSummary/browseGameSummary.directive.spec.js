'use strict';

describe('Directive: browseGameSummary', function () {

  // load the directive's module and view
  beforeEach(module('boardGamrApp'));
  beforeEach(module('app/browseGameSummary/browseGameSummary.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<browse-game-summary></browse-game-summary>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the browseGameSummary directive');
  }));
});