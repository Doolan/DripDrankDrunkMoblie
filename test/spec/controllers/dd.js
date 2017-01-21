'use strict';

describe('Controller: DdCtrl', function () {

  // load the controller's module
  beforeEach(module('dripDrankDrunkMoblieApp'));

  var DdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DdCtrl = $controller('DdCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DdCtrl.awesomeThings.length).toBe(3);
  });
});
