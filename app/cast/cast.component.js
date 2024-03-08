
angular.module('cast')
    .component('castInsert',{
        templateUrl : './cast/cast-insert-form.tpl.html',
        controller : ['$scope','$rootScope','castServices',function castInsertController($scope,$rootScope,castServices){
            $scope.addCast = function(){
                castServices.addCast({cast : $scope.castInput})
                .then(function (response) { 
                    $rootScope.alert = {
                        message : response.data.message,
                        type : 'success'
                    }
                    $scope.castInput = ''
                })
                .catch(function(error){
                    $rootScope.alert = {
                        message : response.data.message,
                        type : 'danger'
                    } 
                })
            }
        }]
    })