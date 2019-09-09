fnol.controller("homeCntrl",function($scope,homeService,$state){
	
	
	console.log("HomeController");
	
	$scope.getHotelDetails=function(){
	console.log("Function Call");
	var hotelName=$scope.hotelName;
	console.log(hotelName);
	homeService.getHotelByName(hotelName).then(
			function(response){
				$scope.hotelDetails=response.data;
				var hotelDetails=$scope.hotelDetails;
				console.log(hotelDetails[0].address);
				var details={
					"address":hotelDetails[0].address,
					"name":hotelDetails[0].name,
					"rating":hotelDetails[0].rating
				};
				details=angular.toJson(details);
				
				console.log(details);
				$state.go("home", { details: details });
			});
	};
	
});