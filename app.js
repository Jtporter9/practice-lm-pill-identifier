angular.module('app', ['ui.router','ngAnimate'])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

		$urlRouterProvider.otherwise('/pillid');

		$stateProvider
			.state('mymeds', {
				url: '/mymeds',
				templateUrl: 'js/mymeds/mymeds.html',
				controller: 'MyMedsCtrl'
			})

			.state('pillid', {
				url: '/pillid',
				templateUrl: 'js/pillid/pillid.html',
				controller: 'PillIdCtrl'
			})

	});
