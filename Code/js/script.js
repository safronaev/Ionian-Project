	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'HTML/Home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about-us', {
				templateUrl : 'HTML/About.html',
				controller  : 'aboutController'
			})

			// route for the team page
			.when('/team', {
				templateUrl : 'HTML/Team.html',
				controller  : 'teamController'
			})
			
			// route for the capabilities page
			.when('/capabilities', {
				templateUrl : 'HTML/Display of capabilities.html',
				controller  : 'capabilitiesController'
			})
			
			// route for the enemies page
			.when('/enemies', {
				templateUrl : 'HTML/Enemies.html',
				controller  : 'enemiesController'
			})

			// route for the enemies page
			.when('/pictures', {
				templateUrl : 'HTML/pictures.html',
				controller  : 'enemiesController'
			})
			
			// route for the contact page
			.when('/contact', {
				templateUrl : 'HTML/Contact.html',
				controller  : 'contactController'
			})
		
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});
	scotchApp.controller('aboutController', function($scope) {
	});
	scotchApp.controller('teamController', function($scope) {
	});
	scotchApp.controller('capabilitiesController', function($scope) {
	});
	scotchApp.controller('enemiesController', function($scope) {
	});
	scotchApp.controller('picturesController', function($scope) {
	});
	scotchApp.controller('contactController', function($scope) {
	});