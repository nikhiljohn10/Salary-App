var app = angular.module('salaryApp', ['ui.router']);

app.run(function($rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', () => {
        $timeout(() => {
            componentHandler.upgradeAllRegistered();
        })
    })
});


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': {
                    templateUrl: 'layout.html'
                },
                'topHeader@home': {
                    templateUrl: 'pages/topbar.html',
                    controller: function ($scope) {
                        $scope.heading = "Home";
                    }
                },
                'sideBar@home': {
                    templateUrl: 'pages/sidebar.html',
                    controller: 'UserController'
                },
                'mainContent@home': {
                    templateUrl: 'pages/home.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('employee', {
            url: '/employee',
            views: {
                '': {
                    templateUrl: 'layout.html'
                },
                'topHeader@employee': {
                    templateUrl: 'pages/topbar.html',
                    controller: function ($scope) {
                        $scope.heading = "Employee";
                    }
                },
                'sideBar@employee': {
                    templateUrl: 'pages/sidebar.html',
                    controller: 'UserController'
                },
                'mainContent@employee': {
                    templateUrl: 'pages/employee.html',
                    controller: 'EmployeeController'
                }
            }
        })
        .state('salary', {
            url: '/salary',
            views: {
                '': {
                    templateUrl: 'layout.html'
                },
                'topHeader@salary': {
                    templateUrl: 'pages/topbar.html',
                    controller: function ($scope) {
                        $scope.heading = "Salary";
                    }
                },
                'sideBar@salary': {
                    templateUrl: 'pages/sidebar.html',
                    controller: 'UserController'
                },
                'mainContent@salary': {
                    templateUrl: 'pages/salary.html',
                    controller: 'SalaryController'
                }
            }
        })
        .state('account', {
            url: '/account',
            views: {
                '': {
                    templateUrl: 'layout.html'
                },
                'topHeader@account': {
                    templateUrl: 'pages/topbar.html',
                    controller: function ($scope) {
                        $scope.heading = "Account";
                    }
                },
                'sideBar@account': {
                    templateUrl: 'pages/sidebar.html',
                    controller: 'UserController'
                },
                'mainContent@account': {
                    templateUrl: 'pages/account.html',
                    controller: 'AccountController'
                }
            }
        })
        .state('settings', {
            url: '/settings',
            views: {
                '': {
                    templateUrl: 'layout.html'
                },
                'topHeader@settings': {
                    templateUrl: 'pages/topbar.html',
                    controller: function ($scope) {
                        $scope.heading = "Settings";
                    }
                },
                'sideBar@settings': {
                    templateUrl: 'pages/sidebar.html',
                    controller: 'UserController'
                },
                'mainContent@settings': {
                    templateUrl: 'pages/settings.html',
                    controller: 'SettingsController'
                }
            }
        });
});

app.controller('UserController', function($scope) {
    $scope.username = "Johny K V";
});

app.controller('HomeController', function($scope) {
    $scope.message = 'test';
});


app.controller('EmployeeController', function($scope) {
    $scope.message = 'test';
});

app.controller('SalaryController', function($scope) {
    $scope.message = 'test';
});

app.controller('AccountController', function($scope) {
    $scope.message = 'test';
});

app.controller('SettingsController', function($scope) {
    $scope.message = 'test';
});
