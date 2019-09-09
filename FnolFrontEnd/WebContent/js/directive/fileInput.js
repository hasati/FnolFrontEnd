  fnol.directive("fileinput", [function() {
    return {
      scope: {
        fileinput: "=",
        filepreview: "="
      },
      link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
          scope.fileinput = changeEvent.target.files[0];
          var ext=scope.fileinput.name.substring(scope.fileinput.name.lastIndexOf("."), scope.fileinput.length);
          if(ext=='.png' || ext== '.jpeg' || ext == '.jpg' ){
        	  if(scope.fileinput.size>2*1024*1024){
            	  alert("File size should be less than 2 MB") ;
            	  return false;
        	  }
          $("#driverWarningMsg").hide();
          	var reader = new FileReader();
          	reader.onload = function(loadEvent) {
            scope.$apply(function() {
            	scope.filepreview = loadEvent.target.result;
            });
          };
          reader.readAsDataURL(scope.fileinput);
          }
          else{
        	$("#driverWarningMsg").show();
        	  alert("Invalid Image (only .png,.jpeg,.jpg accepted)") ;
        	  scope.fileinput="";
        	  return false;
          }
        });
      }
    };
  }]);