'use strict';

describe('Service: recommendationFactory', function () {

  // load the service's module
  beforeEach(module('boardGamePandoraApp'));

  // instantiate service
  var recommendationFactory;
  beforeEach(inject(function (_recommendationFactory_) {
    recommendationFactory = _recommendationFactory_;
  }));

  it('should do something', function () {
    expect(!!recommendationFactory).toBe(true);
  });

});
