'use strict';

describe('orderTable', function() {

  // Load the module that contains the `orderTable` component before each test
  beforeEach(module('orderTable'));

  // Test the controller
  describe('OrderTableController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {

      ctrl = $componentController('orderTable');
    }));

    it('expect date to be formatted correctly!', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      var date = ctrl.toDate(1501322600000);
      expect(date).toEqual("29.07.2017.");
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('date');
    });

  });

});
