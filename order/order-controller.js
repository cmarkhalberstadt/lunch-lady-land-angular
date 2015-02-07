lunchladyApp.controller('OrderCtrl', function($scope, userService) {
	
	// TODO - Replace with live data.
	$scope.orders = [
       {
    	   'id' 			: 1,
    	   'user'			: 1234,
    	   'restaurantId' 	: 1,
    	   'itemsToOrder' 	: '6in Meatball on White, Lays BBQ, Medium Coke',
    	   'estimatedCost'	: 8.00,
    	   'desiredTime' 	: '12:30 CST',
    	   'isOrderOpen' 	: true,
    	   'date'			: '02-06-2015'
       }, {
    	   'id' 			: 2,
    	   'user'			: 1235,
    	   'restaurantId' 	: 1,
    	   'itemsToOrder' 	: '12in Turkey on Wheat, Large Water ',
    	   'estimatedCost'	: 5.00,
    	   'desiredTime' 	: '12:30 CST',
    	   'isOrderOpen' 	: true,
    	   'date'			: '02-06-2015'
       }, {
    	   'id' 			: 3,
    	   'user'			: 1236,
    	   'restaurantId' 	: 1,
    	   'itemsToOrder' 	: '6in Turkey on Wheat, Small Sprite ',
    	   'estimatedCost'	: 4.00,
    	   'desiredTime' 	: '12:30 CST',
    	   'isOrderOpen' 	: true,
    	   'date'			: '02-06-2015'
       }];
	
	$scope.getUserName = function(order) {
		var user = userService.getUserById(order.user);
		return userService.getFullName(user);
	}
});