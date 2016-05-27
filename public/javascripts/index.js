angular.module('crud', ['ui.router', 'crud.controllers'])
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
            url: '/update',
            controller: 'UpdateCtrl'
        })
    }])
    .run(['$state', function($state) {
        $state.go('get');
    }])
