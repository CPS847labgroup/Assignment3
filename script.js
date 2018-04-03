var app = angular.module('MyApp', []);
app.controller('myController', function($scope){
	$scope.today = new Date();
});