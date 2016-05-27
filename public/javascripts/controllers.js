(function() {

    angular.module('crud.controllers', ['ui.router'])
        .controller('GetCtrl', ['$scope', '$http','$state', function($scope, $http,$state) {
            $scope.getUsers = function() {

                return $http.get('/api/get').then(function(resp) {
                    $scope.users = resp.data;
                })
            };
            $scope.loadUpdate = function(user) {
                console.log(user);
                $state.go('update', {
                    uid:user._id
                })
            }

            $scope.deleteUser = function(data) {
                console.log(data)
                return $http.delete('/api/delete/'+data._id).then(function(resp) {
                    $scope.getUsers();
                })

            }
            $scope.getUsers();
        }])
        .controller('AddCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
            $scope.save = function(data) {
                console.log('we');
                $http.post('/api/add', data)
                    .then(function(resp) {
                        //$scope.users.push(resp.data);
                        $state.go('get');
                    })
            }

        }])

        .controller('UpdateCtrl', ['$scope', '$http', '$state', '$stateParams',function($scope, $http, $state,$stateParams) {
            
                //$scope.user._id = $stateParams.uid;
                //$scope.user.id=$stateParams.uid;
                $scope.uid = $stateParams.uid;
                console.log('user._id in update: '+ $scope.uid);
                $scope.update = function(user) {
                $http.put('/api/update/'+$scope.uid, user)
                    .then(function(resp) {
                        //$scope.users.push(resp.data);
                        $state.go('get');
                    })
            };

        }])




})()
