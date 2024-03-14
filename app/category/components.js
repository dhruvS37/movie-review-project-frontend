
angular.module('category')
    .component('categoryInsert',{
        templateUrl : './category/category-insert-form.tpl.html',
        controller : ['$scope','$rootScope','categoryServices','errors',function categoryInsertController($scope,$rootScope,categoryServices,errors){
            $scope.alert = null

            $scope.addCategory = function(){
                categoryServices.addCategory({category : $scope.categoryInput})
                .then(function (response) { 
                    errors.clearAlertTimeout()
                    $scope.alert = errors.setAlertMessage(response.data)
                    $scope.alert.type = 'success'
                    errors.setAlertTimeout($scope.alert)

                    $scope.categoryInput = ''
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