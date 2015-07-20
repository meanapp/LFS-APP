'use strict';

describe('Controller: TechAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TechAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechAddCtrl = $controller('TechAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
