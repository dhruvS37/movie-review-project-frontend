
angular.module('category')
    .component('categoryInsert',{
        templateUrl : './category/category-insert-form.tpl.html',
        controller : ['$scope','$rootScope','categoryServices',function categoryInsertController($scope,$rootScope,categoryServices){
            $scope.alert = null

            $scope.addCategory = function(){
                categoryServices.addCategory({category : $scope.categoryInput})
                .then(function (response) { 
                    $scope.alert = errors.setAlertMessage(response.data)
                    $scope.alert.type = 'success'

                    $scope.categoryInput = ''
                })
                .catch(function(error){
                    $scope.alert = errors.setAlertMessage(error.data)
                    $scope.alert.type = 'danger'
                })
            }
        }]
    })