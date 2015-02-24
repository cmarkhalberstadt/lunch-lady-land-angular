var lunchladyApp = angular.module('lunchladyApp', ['ui.bootstrap', 'ngRoute']);

lunchladyApp.config(['$routeProvider', function($routeProvider) {
	
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'dashboard/dashboard.html',
            controller  : 'dashboardCtrl'
        })

        // route for the View Order Page
        .when('/viewOrder', {
            templateUrl : 'order/view-order.html',
            controller  : 'OrderCtrl'
        })
        
        // route for the New Order Page
        .when('/newOrder', {
            templateUrl : 'order/new-order.html',
            controller  : 'NewOrderCtrl'
        });
}]);