(function(){

    angular.module('crud.controllers', [])
    .controller('GetCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.getUsers = function() {
            
            return $http.get('/api/get').then(function(resp) {
                $scope.users = resp.data;
            })
        };
        $scope.deleteUser = function(data){
            console.log(data)
            return $http.delete('/api/delete/:_id').then(function(resp){
                $scope.getUsers();
            })
            
        }
        $scope.getUsers();   
    }])
    .controller('AddCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.save = function(data) {
            console.log('we');
            $http.post('/api/add', data)
                .then(function(resp) {
                    $scope.users.push(resp.data);
                })
        }
    }])

    

 
})()