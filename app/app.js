var app = angular.module('mainApp', ['ngRoute']);

mainApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			template: 'welcome',
			controller: "myController"
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			template: 'welcome again'
			//controller: 'pageController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

mainApp.controller("myController", function($scope){
      $scope.today = new Date();
    });