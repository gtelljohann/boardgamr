'use strict';

describe('Service: bggApiFactory', function () {

  // load the service's module
  beforeEach(module('boardGamrApp'));

  // instantiate service
  var bggApiFactory;
  beforeEach(inject(function (_bggApiFactory_) {
    bggApiFactory = _bggApiFactory_;
  }));

  it('should do something', function () {
    expect(!!bggApiFactory).toBe(true);
  });

});
