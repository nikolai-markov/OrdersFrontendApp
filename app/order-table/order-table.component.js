'use strict';

// Register `orderTable` component, along with its associated controller and template
angular.
  module('orderTable').
  component('orderTable', {
    templateUrl: 'order-table/order-table.template.html',
    controller: ['Order',
      
	  function OrderTableController(Order) {
	   var self = this;
	   
	   self.orderProp = 'date';
	   self.orders = Order.query({size: 3})

	   self.getOrders = function getOrders() {
		   //Test only digits
		   var isnum = /^\d+$/.test(self.ordersSize);
		   if (!isnum) {
			   window.alert("Please enter only number!");
			   return;
		   }
		   
			this.orders = Order.query({size: self.ordersSize}, function() {
				console.log("after retrieval");
			})
       };
	   
	   /**
	   Convert timestampt date to dd.mm.yyyy.
	   */
	   self.toDate = function toDate(date) {
		   var d = new Date(date);
		   var monthUnformatted = d.getMonth() + 1;
		   var dayOMonth = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
		   var month = monthUnformatted < 10 ? '0' + monthUnformatted : monthUnformatted;
		   return dayOMonth + '.' + month + '.' + d.getFullYear() + '.';
	   };
	   
	  }
    ]
  });
