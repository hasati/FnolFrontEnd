var fnol = angular.module('fnol', ['ui.router']);

fnol.config(function($stateProvider, $urlRouterProvider)
		{
	//console.log("Config");
	$urlRouterProvider.otherwise('/insuredDetails');
			$stateProvider
				.state('home', {
					url: '/home',
					controller : 'hotelDetails',
					templateUrl :'template/home.html',
					title :'fnol',
					params:{details:null}
				}),
				$stateProvider
				.state('insuredDetails', {
					url: '/insuredDetails',
					controller : 'insuredDetailsCntrl',
					templateUrl :'template/insuredDetails.html',
					title :'fnol'
				}),
				$stateProvider
				.state('driverDetails', {
					url: '/driverDetails/:caseNumber/:name',
					controller : 'driverDetailsCntrl',
					templateUrl :'template/driverDetails.html',
					title :'fnol',

				}),
				$stateProvider
				.state('searchScreen', {
					url: '/searchScreen',
					controller : 'searchScreenCntrl',
					templateUrl :'template/SearchScreen.html',
					title :'fnol',

				}),
				$stateProvider
				.state('AgentDriverDetails', {
					url: '/AgentDriverDetails',
					controller : 'agentDriverDetailsCntrl',
					templateUrl :'template/AgentDriverDetails.html',
					title :'fnol',

				}),
				$stateProvider
				.state('paymentPage', {
					url: '/paymentPage',
					controller : 'paymentPageCntrl',
					templateUrl :'template/paymentPage.html',
					title :'fnol',

				});
});