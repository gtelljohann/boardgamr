'use strict';

describe('Controller: LeftnavCtrl', function () {

  // load the controller's module
  beforeEach(module('boardGamrApp'));

  var LeftnavCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeftnavCtrl = $controller('LeftnavCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
