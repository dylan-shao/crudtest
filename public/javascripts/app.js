define([
         'angular',
         'namespace',
         'uiRoute',
        '../modules/crud/namespace',
        '../modules/crud/app.js'
        // './account/main'
    ],
    function(angular, namespace) {
        'use strict';

        var app = angular.module(namespace, [
            uiRoute,
            namespace,
        ]).run(function() {
            //
        });
        return myApp;
    });
