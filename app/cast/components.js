
angular.module('cast')
    .component('castInsert',{
        templateUrl : './cast/cast-insert-form.tpl.html',
        controller : ['$scope','$rootScope','castServices','errors', function castInsertController($scope,$rootScope,castServices,errors){
            $scope.alert = null

            $scope.addCast = function(){
                castServices.addCast({cast : $scope.castInput})
                .then(function (response) { 
                    errors.clearAlertTimeout()
                    $scope.alert = errors.setAlertMessage(response.data)
                    $scope.alert.type = 'success'
                    errors.setAlertTimeout($scope.alert)

                    $scope.castInput = ''
                })
                .catch(function(error){
                    errors.clearAlertTimeout()
                    $scope.alert = errors.setAlertMessage(error.data)
                    $scope.alert.type = 'danger'
                    errors.setAlertTimeout($scope.alert)

                })
            }
        }]
    })