define([], function() {
    function addController($scope, $http, $state) {
        $scope.save = function(data) {
            console.log('we');
            $http.post('/api/add', data)
                .then(function(resp) {
                    //$scope.users.push(resp.data);
                    $state.go('get');
                })
        }
    }

    addController.$inject = ['$scope', '$http', '$state'];
    return addController;
});
