var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                '': {
                    templateUrl: 'layout.html'
                },
                'red@home': {
                    template: "I am Red"
                },
                'blue@home': {
                    template: "I am Blue"
                },
                'green@home': {
                    template: "I am Green"
                }
            }
        });
});
