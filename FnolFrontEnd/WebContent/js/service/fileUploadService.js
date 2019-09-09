fnol.service('fileUploadService',function($http, $q){

	return {
		uploadFileToUrl: function (file) {
			  var fileFormData = new FormData();
	            fileFormData.append('file', file);
	            $http.post("http://localhost:8085/fileUpload", fileFormData, { transformRequest: angular.identity,headers: {'Content-Type': undefined} });
		}
	};
	
});