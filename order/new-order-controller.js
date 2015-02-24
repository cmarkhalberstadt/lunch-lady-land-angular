lunchladyApp.controller('NewOrderCtrl', function($window, $scope, $modal, $log, userService) {

	$scope.goBack = function() {
		$window.history.back();
	};
});