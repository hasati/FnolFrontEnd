fnol.controller("insuredDetailsCntrl",function($scope,insuredDetailsService,$state){
	
	console.log("Insured Details Controller");
	// Adding the data into the table in the form of JSON
	$(document).ready(function(){
	 var form=false;
	 $("#insruedForm").validate({ 
   
        rules: {
            firstname: "required",
            lastname: "required",
			email:"required",
			ssn:"required",
			workPhone:"required",
			dob:"required",
			streetNumber:"required",
			streetName:"required",
			zipCode:"required"
        },
	 messages: {
	      firstname: "Please Enter Your Firstname",
	      lastname: "Please Enter Your Lastname",
		  email:"Please Enter Email Id",
		  ssn:"Please valid SSN Number",
		  workPhone:"Please Enter Valid Number",
		  dob:"Please Enter Date of Birth",
		  streetName:"Please Enter street Name",
		  streetNumber:"Please Enter street Number",
		  zipCode:"Please Enter valid Zip code"
			},
	submitHandler: function() {
		form=$("#insruedForm").valid();
		form=$scope.ageCalculation();
	      if(form==true){
			  $("#warningMsg").hide();
				
			//Store the Form Data in JSON 
			var formData={
					"prefix":$scope.prefix,
					"firstName":$scope.firstName,
					"middleName":$scope.middleName,
					"lastName":$scope.lastName,
					"emailId":$scope.emailId,
					"dob":$scope.dob,
					"gender":$scope.gender.substring(0,1),
					"marriageStatus":$scope.marriageStatus,
					"ssnNumber":$scope.ssnNumber,
					"phoneNumber":$scope.phoneNumber,
					"homePhone":$scope.homePhone,
					"streetNumber":$scope.streetNumber,
					"streetName":$scope.streetName,
					"zipCode":$scope.zipCode,
					"city":$scope.city,
					"state":$scope.state,
					"country":$scope.country
			};
		console.log(formData);
		insuredDetailsService.insertInsuredDetails(formData).then(
				function(response){
					alert("Data insert scuucufully");
					});
	      		}
			}
	 });
});
	
	$scope.setPrefix=function(){
		if($scope.gender=="Male")
			$scope.prefix="Mr.";
		else
			$scope.prefix="Miss";
	};
	
	$scope.ageCalculation=function(){
		if($scope.dob!=undefined && $scope.dob!=null){
	  var diff =($scope.dob.getTime() - new Date().getTime()) / 1000;
	   diff /= (60 * 60 * 24);
	  var age= Math.abs(Math.round(diff/365.25));
	  if(age<18){
		$("#warningMsg").show();
		$scope.warningMsg="Age should be geater than 18" ;
		 return false;
	  }
	  else{
		  $("#warningMsg").hide(); 
		  return true;
	  }
	}
	 
};

	$scope.getLocation=function(){
	insuredDetailsService.getLocation($scope.zipCode).then(
			function(response){
				 $scope.city = response.data.county;
			     $scope.country=response.data.country;
			     $scope.state=response.data.state;
			
	});
};
});
	