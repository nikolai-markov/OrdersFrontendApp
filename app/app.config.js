'use strict';

angular.
  module('ordersApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/orders', {
          template: '<order-table></order-table>'
        }).
        otherwise('/orders');
    }
  ]);
