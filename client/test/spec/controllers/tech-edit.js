'use strict';

describe('Controller: TechEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TechEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechEditCtrl = $controller('TechEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
