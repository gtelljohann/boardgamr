'use strict';

describe('Service: mechanicFactory', function () {

  // load the service's module
  beforeEach(module('boardGamrApp'));

  // instantiate service
  var mechanicFactory;
  beforeEach(inject(function (_mechanicFactory_) {
    mechanicFactory = _mechanicFactory_;
  }));

  it('should do something', function () {
    expect(!!mechanicFactory).toBe(true);
  });

});
