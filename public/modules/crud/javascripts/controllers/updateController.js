define([
    '../../module',
    '../../namespaceCrud',

], function(module, namespace) {
    var name = namespace + '.UpdateController';
    var dependencies = ['$scope', '$http', '$state','$stateParams'];
    var controller = function($scope, $http, $state, $stateParams) {
        $scope.uid = $stateParams.uid;
        console.log('user._id in update: ' + $scope.uid);
        $scope.update = function(user) {
            $http.put('/api/update/' + $scope.uid, user)
                .then(function(resp) {
                    //$scope.users.push(resp.data);
                    $state.go('get');
                })
        };
    }
    module.controller(name, dependencies.concat(controller));
});

