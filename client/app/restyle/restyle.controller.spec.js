'use strict';

describe('Controller: RestyleCtrl', function () {

  // load the controller's module
  beforeEach(module('boardGamrApp'));

  var RestyleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestyleCtrl = $controller('RestyleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
