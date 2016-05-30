(function() {

    angular.module('crud.controllers', ['ui.router','ngResource'])
        .controller('GetCtrl', ['$scope', '$http','$state', '$resource', function($scope, $http,$state, $resource) {
            var collection = $resource('/api/get');
            $scope.getUsers = function() {

                return collection.query(function(resp) {
                    console.log(resp);
                    $scope.users = resp;
                })
            };
            $scope.loadUpdate = function(user) {
                console.log(user);
                $state.go('update', {
                    uid:user._id
                })
            }


            $scope.deleteUser = function(data) {
                var coll_delete = $resource('/api/delete/'+data._id);
                console.log(data)
                return coll_delete.remove({id:data._id},function(resp) {
                    $scope.getUsers();
                })

            }
            $scope.getUsers();
        }])
        .controller('AddCtrl', ['$scope', '$http', '$state', '$resource', function($scope, $http, $state, $resource) {
            var collection = $resource('/api/add');
            $scope.save = function(data) {
                console.log('we');
                collection.save(data, function(resp) {
                        //$scope.users.push(resp.data);
                        $state.go('get');
                    })
            }

        }])

        .controller('UpdateCtrl', ['$scope', '$http', '$state', '$stateParams', '$resource', function($scope, $http, $state,$stateParams, $resource) {
                
            var coll_update = $resource('/api/update/'+$stateParams.uid,{id: "@_id"}, {update: {method: "PUT"}});
                console.log('user._id in update: '+ $stateParams.uid);
            $scope.update = function(user) {
                coll_update.update(user, function(){
                        $state.go('get');
            })
            };

        }])




})()
