define(['javascripts/config',
        'javascripts/addController',
        'javascripts/updateController',
        'javascripts/getController'],
    function(config, addController, updateController, getController){
    'use strict';

    var app = angular.module('crudApp', ['ui.router']);

    app.config(config);
    app.controller('addController', addController);
    app.controller('updateController',updateController);
    app.controller('getController',getController);
    app.run(['$state', function($state) {
        $state.go('get');}]);
});