lunchladyApp.controller("headerCtrl", function($rootScope, $scope) {
	// Add mock restaurants
	$scope.restaurants = [];
	for(var i=0; i<8; i++) {
		var restaurant = {
			name : 'Restaurant ' + (i+1)
		};
		$scope.restaurants.push(restaurant);
	}
	
	$scope.isUserLoggedIn = function() {
		return typeof $rootScope.activeUser !== "undefined";
	}
});