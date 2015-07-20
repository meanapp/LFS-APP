'use strict';

describe('Controller: TechDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TechDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechDeleteCtrl = $controller('TechDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
