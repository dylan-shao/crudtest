angular.module('crud', ['ui.router', 'ngResource','crud.controllers'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('get', {
            url: '/',
            controller: 'GetCtrl',
            templateUrl: 'views/show.html'
        }).state('add', {
            url: '/add',
            controller: 'AddCtrl',
            templateUrl: 'views/add.html'
        }).state('update', {
            url: '/update/:uid',
            controller: 'UpdateCtrl',
            templateUrl:  'views/update.html'
        })
    }])
    .run(['$state', function($state) {
        $state.go('get');
    }])
