"use strict";

lunchladyApp.controller('UserLoginController', [
	'$scope',
	'$rootScope',
	'$cookieStore',
	'AuthenticationService',
	function($scope, $rootScope, $cookieStore, AuthenticationService) {	
		$scope.error = null;
		$rootScope.activeUser = null;
		
		$scope.login = function () {
			var authenticationResult = AuthenticationService.login($scope.username, $scope.password);
			
			if (!authenticationResult.success) {
				$scope.error = "Invalid credentials.";
			} else {
				$scope.error = null;
				$rootScope.activeUser = authenticationResult.userInfo;
				$cookieStore.put(AuthenticationService.LOGGED_IN_COOKIE, authenticationResult.loginCookie);
			}
		};
	}
]);