'use strict';

describe('Controller: DrinkCtrl', function () {

  // load the controller's module
  beforeEach(module('dripDrankDrunkMoblieApp'));

  var DrinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrinkCtrl = $controller('DrinkCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DrinkCtrl.awesomeThings.length).toBe(3);
  });
});
