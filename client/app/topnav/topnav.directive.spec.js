'use strict';

describe('Directive: topnav', function () {

  // load the directive's module and view
  beforeEach(module('boardGamrApp'));
  beforeEach(module('app/topnav/topnav.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<topnav></topnav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the topnav directive');
  }));
});