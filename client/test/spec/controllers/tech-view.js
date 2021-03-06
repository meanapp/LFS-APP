'use strict';

describe('Controller: TechViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TechViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechViewCtrl = $controller('TechViewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
