'use strict';

describe('Directive: recommendation', function () {

  // load the directive's module and view
  beforeEach(module('boardGamrApp'));
  beforeEach(module('app/recommendation/recommendation.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<recommendation></recommendation>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the recommendation directive');
  }));
});