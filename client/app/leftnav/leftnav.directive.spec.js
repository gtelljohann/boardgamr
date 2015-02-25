'use strict';

describe('Directive: leftnav', function () {

  // load the directive's module and view
  beforeEach(module('boardGamrApp'));
  beforeEach(module('app/leftnav/leftnav.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<leftnav></leftnav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the leftnav directive');
  }));
});