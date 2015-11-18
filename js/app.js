var app = angular.module('salaryApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'pages/partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        .state('employee', {
            url: '/employee',
            views: {
                '': {
                    templateUrl: 'pages/employee.html'
                },
                'columnOne@employee': {
                    template: 'Look I am a column!'
                },
                'columnTwo@employee': {
                    templateUrl: 'pages/salary.html',
                    controller: 'AppController'
                }
            }
        });
});

app.controller('AppController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [{
        name: 'Macallan 12',
        price: 50
    }, {
        name: 'Chivas Regal Royal Salute',
        price: 10000
    }, {
        name: 'Glenfiddich 1937',
        price: 20000
    }];

});
