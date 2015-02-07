lunchladyApp.controller('OrderCtrl', function($scope, $modal, $log, userService) {
	
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
	
	$scope.startDeleteOrder = function(order) {
	    var modalInstance = $modal.open({
	    	templateUrl: 'deleteOrderModal.html',
	    	controller: 'deleteOrderModalCtrl',
	    	resolve: {
	    		orderToDelete: function() {
	    			return order;
	    		}
	    	}
	    });

	    modalInstance.result.then(function (order) {
	    	// TODO - Actually Delete Order
	    	for(var i = 0; i < $scope.orders.length; i++) {
	    		if ($scope.orders[i].id == order.id) {
	    			$scope.orders.splice(i, 1);
	    		}
	    	}
	    });
	};
});

// The Delete Order Modal Controller
// TODO - Discuss if this is the best location for this controller. Not sure how typical Angular apps
// want to organize something like this as it makes sense to include here in the primary controller.
lunchladyApp.controller('deleteOrderModalCtrl', function($scope, $log, $modalInstance, userService, orderToDelete) {
	
	$scope.orderToDelete = orderToDelete;
	
	$scope.cancelDeleteOrder = function() {
		$modalInstance.dismiss('cancel');
	}
	
	$scope.submitDeleteOrder = function() {
		$modalInstance.close($scope.orderToDelete);
	}
	
	// TODO - Exact same method in OrderCtrl.  What is the proper way to clean this up and avoid the copy/paste?
	$scope.getUserName = function(order) {
		var user = userService.getUserById(order.user);
		return userService.getFullName(user);
	}
});