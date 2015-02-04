"use strict";

lunchladyApp.factory('AuthenticationService', [
	'$http',
	function($http) {
		var service = {};

		service.login = function (username, password) {
			var result = {};
			
			// TODO - Remove and replace with real authentication via $http
			if (username === "test" && password === "test") {
				result.success = true;
				result.loginCookie = "TESTUSER_1234";
				result.userInfo = {
					"id" : 1234,
					"firstName" : "Spongebob",
					"lastName" : "Squarepants",
					"email" : "bob@xpanxion.com",
					"phone" : "555-555-5555",
					"office" : 123,
					"password" : "squidward",
				}
			}
			return result;
		};

		service.LOGGED_IN_COOKIE = "loginCookie";
		return service;
	}
]);