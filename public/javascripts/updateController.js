define([], function() {
    function updateController($scope, $http, $state, $stateParams) {
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

    updateController.$inject = ['$scope', '$http', '$state','$stateParams'];
    return updateController;
});
