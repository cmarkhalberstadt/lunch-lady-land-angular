lunchladyApp.controller('loginCtrl', function($rootScope, $scope) {

	$scope.login = function() {
		$("#login_user").val("");
		$("#login_pw").val("");
		$rootScope.activeUser = "someuser";
	}
});