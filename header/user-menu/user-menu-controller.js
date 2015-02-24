lunchladyApp.controller('userMenuCtrl', function($rootScope, $scope) {
	
	$scope.logout = function() {
		$rootScope.activeUser = undefined;
	}
});