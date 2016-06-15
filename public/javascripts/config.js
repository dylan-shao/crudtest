define([],function(){
  function config($stateProvider) {
    $stateProvider.state('get', {
        url: '/',
        controller: 'getController',
        templateUrl: 'views/show.html'
    }).state('add', {
        url: '/add',
        controller: 'addController',
        templateUrl: 'views/add.html'
    }).state('update', {
        url: '/update/:uid',
        controller: 'updateController',
        templateUrl: 'views/update.html'
    })
  }
  config.$inject=['$stateProvider'];

  return config;
});