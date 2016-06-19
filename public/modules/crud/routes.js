define([
    './module',
     'modules/crud/namespaceCrud'
    // '../../uiRoute'
    ],
    function(module,namespace) {
        var dependencies = ['$stateProvider'];
        var config = function($stateProvider) {
            $stateProvider.state('get', {
                url: '/',
                controller: namespace+ '.GetController',
                templateUrl: 'modules/crud/views/show.html'
            }).state('add', {
                url: '/add',
                controller: namespace+'.AddController',
                templateUrl: 'modules/crud/views/add.html'
            }).state('update', {
                url: '/update/:uid',
                controller: namespace+'.UpdateController',
                templateUrl: 'modules/crud/views/update.html'
            })
        }
        module.config(dependencies.concat(config));
    });
