fnol.controller("paymentPageCntrl",function($scope,insuredDetailsService,$state){
	$scope.num=['1','2','3'];
	//mouse over navbar
	$('.navbar').mouseover(function(event) {
	  $(this).find('.navbar-tool').show();
	});

	//mouse out of navbar
	$('.navbar').mouseout(function(event) {
	  $(this).find('.navbar-tool').hide();
	});

	//on close collapse
	$('.collapse').on('hidden.bs.collapse', function () {
	  var target = '#'+$(this).attr('data-parent');
	  $(target).removeClass('collapse-open');
	});

	//on open collapse
	$('.collapse').on('shown.bs.collapse', function () {
	  var target = '#'+$(this).attr('data-parent');
	  $(target).addClass('collapse-open');
	});

});