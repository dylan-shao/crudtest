define([], function() {
    function getController($scope, $http, $state) {
        $scope.getUsers = function() {

            return $http.get('/api/get').then(function(resp) {
                $scope.users = resp.data;
            })
        };
        $scope.loadUpdate = function(user) {
            console.log(user);
            $state.go('update', {
                uid: user._id
            })
        }

        $scope.deleteUser = function(data) {
            console.log(data)
            return $http.delete('/api/delete/' + data._id).then(function(resp) {
                $scope.getUsers();
            })

        }
        $scope.getUsers();
    }

    getController.$inject = ['$scope', '$http', '$state'];
    return getController;
});
