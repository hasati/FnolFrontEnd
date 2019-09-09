fnol
		.controller(
				"driverDetailsCntrl",
				function($scope, driverDetailsService, $state, $stateParams,
						fileUploadService) {
					$scope.displayDriverForm = true;
					$scope.caseNumber = $stateParams.caseNumber;
					$scope.insuredPersonName = $stateParams.name;
					$scope.jsonData = [];

					$scope.validateInsuredPersonDetails = function() {
						var form = false;
						$("#insruedForm")
								.validate(
										{
											rules : {
												insuredPersonPhoneNumber : {
													required : true,
													number : true
												},
												insuredPeronsdob : "required"
											},
											messages : {
												insuredPersonPhoneNumber : {
													required : "Please Enter Phone Number",
													number : "Please enter only numberic value"
												},
												insuredPeronsdob : "Please Enter Date of Birth"
											},
											submitHandler : function() {
												form = $("#insruedForm")
														.valid();
											// form=$scope.ageCalculation($scope.insuredPeronsdob,"#warningMsg");
												if (form == true) {
													var formData = {
														"insuredPeronsdob" : $scope.insuredPeronsdob
																.getDate()
																+ "-"
																+ ($scope.insuredPeronsdob
																		.getMonth() + 1)
																+ "-"
																+ $scope.insuredPeronsdob
																		.getFullYear(),
														"insuredPersonPhoneNumber" : $scope.insuredPersonPhoneNumber,
														"caseNumber" : $scope.caseNumber
													};
													console.log(formData);
													$scope.displayDriverForm = false;
													$scope.insuredDetails = true;
													/*driverDetailsService.checkInsuredDetails(formData)
															.then(function(response) {
															if (true == true) {
																console.log(response.data.emailId);
																			$scope.insuredPersonEmailId = response.data.emailId;
																			$scope.displayDriverForm = false;
																			$scope.insuredDetails = true;
																		} else {
																			alert("You have enter wrong data");
																		}
																	});*/
												}
											}
										});

					};

					$scope.addDriverDetails = function() {
						var form = false;

						$("#driverForm")
								.validate(
										{
											rules : {
												firstname : "required",
												lastname : "required",
												email : "required",
												drivingexperience : "required",
												dob : "required",
												trafficevoilation : {
													required : true,
													number : true
												},
												trafficeaccident : {
													required : true,
													number : true
												},
												licensenumber : "required",
												drivingExperience : {
													required : true,
													number : true
												},
												vechicleNumber : "required",
												vechileVINNumber : "required",
												vechicleCompany : "required",
												vechicleModel : "required",
												vechileModelYear : "required"
											},
											messages : {
												firstname : "Please Enter Your First Name",
												lastname : "Please Enter Your Last Name",
												email : "Please Enter Email Id",
												dob : "Please Enter Date of Birth",
												trafficevoilation : {
													required : "Please Enter Traffic Voilation",
													number : "Please Enter only numberic value"
												},
												trafficeaccident : {
													required : "Please Enter Traffic Accident",
													number : "Please Enter only numberic value"
												},
												licensenumber : "Please Enter License Number",
												drivingExperience : {
													required : "Please Enter Driving Experience",
													number : "Please Enter only numberic value"
												},
												vechicleNumber : "Please Enter Vechicle Number",
												vechileVINNumber : "Please Enter VIN",
												vechicleCompany : "Please Enter Company Maker",
												vechicleModel : "Please Enter Model",
												vechileModelYear : "Please Enter Vechicle Purchase Date",

											},
											submitHandler : function() {
												form = $("#driverForm").valid();
												form=$scope.ageCalculation($scope.dob);
												console.log(form);

												if (form == true) {

													var duplicateRecordFound = false;

													if ($scope.licenseStatus == "NV") {
														$("#driverWarningMsg")
																.show();
														$("#driverWarningMsg")
																.text(
																		'Only Valid Driver status is accepted');
														$("#LicenseStaus")
																.focus();
														return false;
													} else if ($scope.drivingExperience <= 1) {
														$("#driverWarningMsg")
																.show();
														$("#driverWarningMsg")
																.text(
																		'More than 1 years drivinig experience accepted');
														$("#drivingExperience")
																.focus();
														return false;
													} else if ($scope.trafficVoliation >= 2) {
														$("#driverWarningMsg")
																.show();
														$("#driverWarningMsg")
																.text(
																		'More than 2 Traffic Voliation cannot accepted');
														$("#trafficevoilation")
																.focus();
														return false;
													} else if ($scope.trafficAccident >= 2) {
														$("#driverWarningMsg")
																.show();
														$("#driverWarningMsg")
																.text(
																		'More than 2 Traffic Accident cannot accepted');
														$("#trafficaccident")
																.focus();
														return false;
													} else if ($scope.vechileVINNumber < 17) {
														$("#driverWarningMsg")
																.show();
														$("#driverWarningMsg")
																.text(
																		'VIN is composed of 17 characters ');
														$("#vechileVINNumber")
																.focus();
														return false;
													} else if ($scope.filepreview == undefined
															|| $scope.filepreview == null) {
														$("#driverWarningMsg")
																.show();
														$("#driverWarningMsg")
																.text(
																		'Please Upload Adhaar or Pan Card Scan Copy');
														return false;
													} else if ($scope.filepreview2 == undefined
															|| $scope.filepreview2 == null) {
														$("#driverWarningMsg")
																.show();
														$("#driverWarningMsg")
																.text(
																		'Please Upload Drivining License Scan Copy');
														return false;
													} else if ($scope.filepreview3 == undefined
															|| $scope.filepreview3 == null) {
														$("#driverWarningMsg")
																.show();
														$("#driverWarningMsg")
																.text(
																		'Please Upload Vechicle Purchase Scan Copy');
														return false;
													}
													$("#driverWarningMsg")
															.hide();
													var formData = {
														"prefix" : $scope.prefix,
														"firstName" : $scope.firstName,
														"middleName" : $scope.middleName,
														"lastName" : $scope.lastName,
														"emailId" : $scope.emialId,
														"dob" : $scope.dob,
														"gender" : $scope.gender
																.substring(0, 1),
														"marriageStatus" : $scope.marriageStatus,
														"relation" : $scope.relation,
														"licenseStatus" : $scope.licenseStatus,
														"driverStatus" : $scope.driverStatus,
														"drivingexperience" : $scope.drivingExperience,
														"licenseNumber" : $scope.licenseNumber,
														"trafficVoliation" : $scope.trafficVoliation,
														"trafficAccident" : $scope.trafficAccident,
														"vechileVINNumber" : $scope.vechileVINNumber,
														"vechicleCompany" : $scope.vechicleCompany,
														"vechicleModel" : $scope.vechicleModel,
														"vechileModelYear" : $scope.vechileModelYear,
														"vechicleNumber" : $scope.vechicleNumber,
														"file" : $scope.file,
														"filepreview" : $scope.filepreview,
														"file2" : $scope.file2,
														"filepreview2" : $scope.filepreview2,
														"file3" : $scope.file3,
														"filepreview3" : $scope.filepreview3
													};
													if ($scope.jsonData.length == 0) {
														$("#DriverDetailsPanel")
																.show();
														$scope.jsonData
																.push(formData);
														$('#btnContactUs')
																.removeAttr(
																		'disabled');
														$('#driverForm')
																.trigger(
																		"reset");
														$scope.filepreview = "";
														$scope.filepreview2 = "";
														$scope.filepreview3 = "";
														$scope.$apply();
													} else {
														jQuery
																.each(
																		$scope.jsonData,
																		function(
																				i,
																				v) {
																			console
																					.log(formData.licenseNumber
																							+ "  "
																							+ v.licenseNumber);
																			if (v.licenseNumber == formData.licenseNumber) {
																				$(
																						"#driverWarningMsg")
																						.show();
																				$(
																						"#driverWarningMsg")
																						.text(
																								formData.licenseNumber
																										+ 'License Number is recorded previously');
																				duplicateRecordFound = true;
																			} else if (v.emailId == formData.licenseNumber) {
																				$(
																						"#driverWarningMsg")
																						.show();
																				$(
																						"#driverWarningMsg")
																						.text(
																								formData.licenseNumber
																										+ 'Email Id is recorded previously');
																				duplicateRecordFound = true;
																			} else if (v.vechileVINNumber == formData.vechileVINNumber) {
																				$(
																						"#driverWarningMsg")
																						.show();
																				$(
																						"#driverWarningMsg")
																						.text(
																								formData.vechileVINNumber
																										+ ' VIN Number is recorded previously');
																				duplicateRecordFound = true;
																			} else if (v.vechicleNumber == formData.vechicleNumber) {
																				$(
																						"#driverWarningMsg")
																						.show();
																				$(
																						"#driverWarningMsg")
																						.text(
																								formData.vechicleNumber
																										+ 'Vechile Number is recorded previously');
																				duplicateRecordFound = true;
																			}
																		});
														if (duplicateRecordFound == false) {
															$scope.jsonData
																	.push(formData);
															$('#driverForm')
																	.trigger(
																			"reset");
															$scope.filepreview = "";
															$scope.filepreview2 = "";
															$scope.filepreview3 = "";
															$scope.$apply();
														}
													}
													if ($scope.jsonData.length == 0) {
														console
																.log("Diable attribute is added");
														$('#btnContactUs')
																.attr(
																		"disabled",
																		"disabled");
													}
													if ($scope.jsonData.length == 4) {
														$(this).attr(
																"disabled",
																"disabled");
														$("#warningMsgModal")
																.show();
														$("#driverWarningMsg")
																.text(
																		'*Only four driver driver is added');
														return true;
													}

												}
											}
										});
					};

					$(document).ready(function() {
						$("#myModal").modal({
							show : false,
							backdrop : 'static'
						});
						$('#driverFormModal').trigger("reset");
					});

					// View the data
					$scope.viewData = function(index) {
						console.log("View Data");
						$scope.tableRowIndex = index;
						$scope.mPrefix = $scope.jsonData[index].prefix;
						$scope.mFirstname = $scope.jsonData[index].firstName;
						$scope.mMiddlename = $scope.jsonData[index].middleName;
						$scope.mLastname = $scope.jsonData[index].lastName;
						$scope.mEmailId = $scope.jsonData[index].emailId;
						$scope.mDob = $scope.jsonData[index].dob;
						$scope.mGender = $scope.jsonData[index].gender;
						$scope.mMarriageStatus = $scope.jsonData[index].marriageStatus;
						$scope.mRelation = $scope.jsonData[index].relation;
						$scope.mLicenseStatus = $scope.jsonData[index].licenseStatus;
						$scope.mDriverStatus = $scope.jsonData[index].driverStatus;
						$scope.mDrivingExperience = $scope.jsonData[index].drivingexperience;
						$scope.mLicensenumber = $scope.jsonData[index].licenseNumber;
						$scope.mTrafficevoilation = $scope.jsonData[index].trafficVoliation;
						$scope.mTrafficeAccident = $scope.jsonData[index].trafficAccident;
						$scope.mVechileVINNumber = $scope.jsonData[index].vechileVINNumber;
						$scope.mVechicleCompany = $scope.jsonData[index].vechicleCompany;
						$scope.mVechicleModel = $scope.jsonData[index].vechicleModel;
						$scope.mVechileModelYear = $scope.jsonData[index].vechileModelYear;
						$scope.mVechicleNumber = $scope.jsonData[index].vechicleNumber;
						$scope.mFilepreview = $scope.jsonData[index].filepreview;
						$scope.mFile = $scope.jsonData[index].file;
						$scope.mFile2 = $scope.jsonData[index].file2;
						$scope.mFile3 = $scope.jsonData[index].file3;
						$scope.mFilepreview2 = $scope.jsonData[index].filepreview2;
						$scope.mFilepreview3 = $scope.jsonData[index].filepreview3;
					};

					$scope.modelDataSave = function() {
						console.log("In save button" + licensenumber);
						if ($scope.mLicenseStatus == "NV") {
							$("#warningMsgModal").show();
							$("#warningMsgModal").text(
									'Only Valid Driver status is accepted');
							return false;
						} else if ($scope.mDrivingExperience <= 1) {
							$("#warningMsgModal").show();
							$("#warningMsgModal")
									.text(
											'More than 1 years drivinig experience accepted');
							return false;
						} else if ($scope.mTrafficevoilation >= 2) {
							$("#warningMsgModal").show();
							$("#warningMsgModal")
									.text(
											'More than 2 Traffic Voliation cannot accepted');
							return false;
						} else if ($scope.mTrafficeAccident >= 2) {
							$("#warningMsgModal").show();
							$("#warningMsgModal")
									.text(
											'More than 2 Traffic Accident cannot accepted');
							return false;
						} else if ($scope.mVechileVINNumber < 17) {
							$("#driverWarningMsg").show();
							$("#driverWarningMsg").text(
									'VIN is composed of 17 characters ');
							$("#vechileVINNumber").focus();
							return false;
						} else if ($scope.mFilepreview == undefined
								|| $scope.mFilepreview == null) {
							$("#driverWarningMsg").show();
							$("#driverWarningMsg")
									.text(
											'Please Upload Adhaar or Pan Card Scan Copy');
							return false;
						} else if ($scope.mFilepreview2 == undefined
								|| $scope.mFilepreview2 == null) {
							$("#driverWarningMsg").show();
							$("#driverWarningMsg")
									.text(
											'Please Upload Drivining License Scan Copy');
							return false;
						} else if ($scope.mFilepreview3 == undefined
								|| $scope.mFilepreview3 == null) {
							$("#driverWarningMsg").show();
							$("#driverWarningMsg")
									.text(
											'Please Upload Vechicle Purchase Scan Copy');
							return false;
						}

						for (var i = 0; i < $scope.jsonData.length; i++) {
							if ($scope.mEmail == $scope.jsonData[i].emailId
									&& i != $scope.tableRowIndex) {
								$("#warningMsgModal").show();
								$("#warningMsgModal")
										.text(
												$scope.mEmail
														+ ' Email Id is recorded previously');
								return false;
							}

							else if ($scope.mLicenseNumber == $scope.jsonData[i].licenseNumber
									&& i != $scope.tableRowIndex) {
								console.log("licensenumber is duplicate");
								$("#warningMsgModal").show();
								$("#warningMsgModal")
										.text(
												$scope.mLicenseNumber
														+ ' License Number is recorded previously');
								return false;
							} else if ($scope.mVechileVINNumber == $scope.jsonData[i].vechileVINNumber
									&& i != $scope.tableRowIndex) {
								$("#warningMsgModal").show();
								$("#warningMsgModal")
										.text(
												v.mVechileVINNumber
														+ ' VIN is recorded previously');
								return false;
							} else if ($scope.mVechicleNumber == $scope.jsonData[i].vechicleNumber
									&& i != $scope.tableRowIndex) {
								$("#warningMsgModal").show();
								$("#warningMsgModal")
										.text(
												v.mVechicleNumber
														+ ' Vechicle Number is recorded previously');
								return false;
							}
						}
						$("#warningMsgModal").hide();

						$scope.jsonData[$scope.tableRowIndex].prefix = $scope.mPrefix;
						$scope.jsonData[$scope.tableRowIndex].firstName = $scope.mFirstname;
						$scope.jsonData[$scope.tableRowIndex].middleName = $scope.mMiddlename;
						$scope.jsonData[$scope.tableRowIndex].lastName = $scope.mLastname;
						$scope.jsonData[$scope.tableRowIndex].emailId = $scope.mEmailId;
						$scope.jsonData[$scope.tableRowIndex].dob = $scope.mDob;
						$scope.jsonData[$scope.tableRowIndex].gender = $scope.mGender;
						$scope.jsonData[$scope.tableRowIndex].marriageStatus = $scope.mMarriageStatus;
						$scope.jsonData[$scope.tableRowIndex].relation = $scope.mRelation;
						$scope.jsonData[$scope.tableRowIndex].licenseStatus = $scope.mLicenseStatus;
						$scope.jsonData[$scope.tableRowIndex].driverStatus = $scope.mDriverStatus;
						$scope.jsonData[$scope.tableRowIndex].drivingexperience = $scope.mDrivingExperience;
						$scope.jsonData[$scope.tableRowIndex].licenseNumber = $scope.mLicensenumber;
						$scope.jsonData[$scope.tableRowIndex].trafficVoliation = $scope.mTrafficevoilation;
						$scope.jsonData[$scope.tableRowIndex].trafficAccident = $scope.mTrafficeAccident;
						$scope.jsonData[$scope.tableRowIndex].vechileVINNumber = $scope.mVechileVINNumber;
						$scope.jsonData[$scope.tableRowIndex].vechicleCompany = $scope.mVechicleCompany;
						$scope.jsonData[$scope.tableRowIndex].vechicleModel = $scope.mVechicleModel;
						$scope.jsonData[$scope.tableRowIndex].vechileModelYear = $scope.mVechileModelYear;
						$scope.jsonData[$scope.tableRowIndex].vechicleNumber = $scope.mVechicleNumber;
						$scope.jsonData[$scope.tableRowIndex].filepreview = $scope.mFilepreview;
						$scope.jsonData[$scope.tableRowIndex].file = $scope.mFile;
						$scope.jsonData[$scope.tableRowIndex].file2 = $scope.mFile2;
						$scope.jsonData[$scope.tableRowIndex].file3 = $scope.mFile3;
						$scope.jsonData[$scope.tableRowIndex].filepreview2 = $scope.mFilepreview2;
						$scope.jsonData[$scope.tableRowIndex].filepreview3 = $scope.mFilepreview3;
						$("#warningMsgModal").show();
						$("#warningMsgModal").text('Record Save Successfully');
					};

					// Deleteing the Data form the JSON array
					$scope.deleteRow = function(index) {
						console.log($scope.jsonData);
						if (confirm("Are you sure want to delete the row?")) {
							$scope.jsonData.splice(index, 1);

							if ($scope.jsonData.length == 0) {
								$('#btnContactUs').attr("disabled", "disabled");
								$("#DriverDetailsPanel").hide();
							}
							if ($scope.jsonData.length <= 4) {
								$("#warningMsg").hide();
								$('#add').removeAttr('disabled');
							}
							if ($scope.jsonData.length > 0) {
								$('#btnContactUs').removeAttr('disabled');
							}
						}
						console.log($scope.jsonData);
					};

					$scope.hide = function() {
						$("#warningMsgModal").hide();
					};

					$scope.ageCalculation = function(dob,warningMsgId) {
						if (dob != undefined && dob != null) {
							var diff = (dob.getTime() - new Date().getTime()) / 1000;
							diff /= (60 * 60 * 24);
							var age = Math.abs(Math.round(diff / 365.25));
							if (age < 18) {
								$(warningMsgId).show();
								$scope.warningMsg = "Age should be geater than 18";
								return false;
							} else {
								$(warningMsgId).hide();
								return true;
							}
						}
					};

					$scope.submitDriverDetails = function() {
						console.log("*********FINAL JSON******");
						console.log($scope.jsonData);
						var jsonData = $scope.jsonData;
						driverDetailsService.insertInsuredDetails(jsonData,$scope.insuredPersonEmailId,	$scope.caseNumber,$scope.insuredPersonName)
								.then(function(response) {
									if(response.status==200){
									//	$state.go("home");
									}
									else{
										alert("Data is in valid ")
									}
								});
					};

				});