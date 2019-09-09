fnol.service('homeService',function($http){
	return {

		getLocation: function(zipCode){
			 return $http.get("https://zip.getziptastic.com/v2/in/"+zipCode);
		}
	};
	
});