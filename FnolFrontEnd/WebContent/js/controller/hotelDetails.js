fnol.controller("hotelDetails",function($scope,homeService,$state,$stateParams){
	console.log($stateParams.details);
	$scope.hotelDetails=angular.fromJson($stateParams.details);
	
});