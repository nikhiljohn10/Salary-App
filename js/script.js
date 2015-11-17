var salaryApp = angular.module('salaryApp', ['ngRoute']);
// configure our routes
scotchApp.config(function( $routeProvider, $locationProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    // route for the employee page
    .when('/employee', {
        templateUrl: 'pages/employee.html',
        controller: 'employeeController'
    })

    // route for the salary page
    .when('/salary', {
        templateUrl: 'pages/salary.html',
        controller: 'salaryController'
    });
	$locationProvider.html5Mode(true);
});

salaryApp.controller('mainController', function($scope) {
    $scope.user = {
        name: 'Johny K V',
        id: 'johnykv',
        permissions: '111'
    };
    // this.amc = 4;
});

salaryApp.controller('homeController', function($scope) {
	$scope.heading = "Home";
});

salaryApp.controller('employeeController', function($scope) {
	$scope.heading = "Employee";
});

salaryApp.controller('salaryController', function($scope) {
	$scope.heading = "Salary";
});