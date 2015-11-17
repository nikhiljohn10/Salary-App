angular.module('app', ['ngNewRouter', 'app.home', 'app.employee', 'app.salary'])
    .controller('AppController', ['$router', AppController]);
AppController.$routeConfig([{
    path: '/',
    component: 'home'
}, {
    path: '/employee',
    component: 'employee'
}, {
    path: '/salary',
    component: 'salary'
}]);

function AppController($router) {}


// configure our routes
/*salaryApp.config(function( $routeProvider, $locationProvider) {
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
*/
/*
salaryApp.controller('homeController', function($scope) {
    $scope.heading = "Home";
});

salaryApp.controller('employeeController', function($scope) {
    $scope.heading = "Employee";
});

salaryApp.controller('salaryController', function($scope) {
    $scope.heading = "Salary";
});*/
