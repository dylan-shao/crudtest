define([
        'angular',
        'modules/crud/namespaceCrud',
        'uiRoute'
        // 'app',
        // 'routes'
],
    function (angular, namespace) {
        'use strict';

        return angular.module(namespace, ['ui.router']);

    });

