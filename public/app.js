define([
         'angular',
         'namespace',
        'modules/crud/namespaceCrud',
        'modules/crud/app.js',
         'uiRoute',
        // './account/main'
    ],
    function(angular, namespace,namespaceCrud) {
        'use strict';

        var myApp = angular.module(namespace, [
            'ui.router',
            namespaceCrud
        ]).run(['$state',function($state) {
            $state.go('get');
        }]);
        return myApp;
    });
