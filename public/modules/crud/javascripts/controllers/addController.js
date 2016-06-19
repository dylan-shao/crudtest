define([
    '../../module',
    '../../namespaceCrud',

], function(module, namespace) {
    var name = namespace + '.AddController';
    var dependencies = ['$scope', '$http', '$state'];
    var controller = function($scope, $http, $state) {
        $scope.save = function(data) {
            console.log('we');
            $http.post('/api/add', data)
                .then(function(resp) {
                    //$scope.users.push(resp.data);
                    $state.go('get');
                })
        }
    };
    module.controller(name, dependencies.concat(controller));
});
