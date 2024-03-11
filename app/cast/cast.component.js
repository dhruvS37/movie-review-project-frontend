
angular.module('cast')
    .component('castInsert',{
        templateUrl : './cast/cast-insert-form.tpl.html',
        controller : ['$scope','$rootScope','castServices',function castInsertController($scope,$rootScope,castServices){
            $scope.alert = null
            $scope.setErrorMessage = function (data) {
                let alert = { message: '' }
                if ('movieName' in data)
                    alert.message += data.movieName + "\n"
                if ('category' in data)
                    alert.message += data.category + "\n"
                if ('rating' in data)
                    alert.message += data.rating + "\n"
                if ('message' in data)
                    alert.message += data.message
    
                $scope.alert = alert
            }

            $scope.addCast = function(){
                castServices.addCast({cast : $scope.castInput})
                .then(function (response) { 
                    $scope.setErrorMessage(response.data)
                    $scope.alert.type = 'success'

                    $scope.castInput = ''
                })
                .catch(function(error){
                    $scope.setErrorMessage(error.data)
                    $scope.alert.type = 'danger'
                })
            }
        }]
    })