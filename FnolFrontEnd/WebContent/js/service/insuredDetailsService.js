fnol.service('insuredDetailsService',function($http){
	return {

		getLocation: function(zipCode){
			 return $http.get("https://zip.getziptastic.com/v2/in/"+zipCode);
		},
		insertInsuredDetails: function(detais){
			 return $http.post("http://localhost:8085/insertInsuredPersonDetails",detais);
		}
	};
	
});