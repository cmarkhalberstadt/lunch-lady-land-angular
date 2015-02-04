"use strict";

lunchladyApp.controller('OrderController', [
	'$scope',
	'$rootScope',
	function($scope, $rootScope) {
		$scope.order = {};
		$scope.order.restaurant = "Select a Delivery Location";
		$scope.wizardNumber = 0;
		
		$scope.SHOW_ORDER_PANEL_TIME = 0;
		$scope.SHOW_ORDER_PANEL_INFO = 1;
		$scope.SHOW_ORDER_PANEL_CONFIRM = 2;
		
		$scope.wizard = function () {
			var wizard = {};
			
			wizard.proceed = function () {
				console.info($scope.wizardNumber);
				$scope.wizardNumber++;
			}
			
			wizard.goBack = function() {
				console.info($scope.wizardNumber);
				$scope.wizardNumber--;
			}
			
			wizard.isSelected = function(pageNumber) {
				return pageNumber === $scope.wizardNumber;
			}
			
			return wizard;
		}
		
		$scope.setOrderTime = function(time) {
			$scope.order.time = time;
			$scope.wizard().proceed();
		}
	}
]);