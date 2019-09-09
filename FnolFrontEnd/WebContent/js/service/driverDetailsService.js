fnol.service('driverDetailsService', function($http) {

	return {
		checkInsuredDetails : function(details) {
			return "true" /*$http.get("http://localhost:8085/checkInsuredDetails/"
					+ details.insuredPersonPhoneNumber + "/"
					+ details.insuredPeronsdob + "/" + details.caseNumber);*/
		},
		insertInsuredDetails : function(jsonData,insuredPersonEmailId,insuredPersonCaseNumber,insuredPersonName) {
			var formData = new FormData();
			for (var i = 0; i < jsonData.length; i++) {
				formData.append("file", jsonData[i].file);
				formData.append("file1", jsonData[i].file2);
				formData.append("file3", jsonData[i].file3);
				/*delete jsonData[i]["file"];
				delete jsonData[i]["file2"];
				delete jsonData[i]["file3"];*/
			}
			formData.append('driverDetails', new Blob([ JSON
					.stringify(jsonData) ], {
				type : "application/json"
			}));
			formData.append("insuredPersonEmailId",insuredPersonEmailId);
			formData.append("insuredPersonCaseNumber",insuredPersonCaseNumber);
			formData.append("insuredPersonName",insuredPersonName);
			return $http.post("http://localhost:8085/insertDriverDetails", formData, {
				transformRequest : angular.identity,
				headers : {
					'Content-Type' : undefined
				}
			});
		}
	};

});