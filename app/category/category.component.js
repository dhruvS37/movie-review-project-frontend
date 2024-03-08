
angular.module('category')
    .component('categoryInsert',{
        templateUrl : './category/category-insert-form.tpl.html',
        controller : ['$scope','$rootScope','categoryServices',function categoryInsertController($scope,$rootScope,categoryServices){
            $scope.addCategory = function(){
                categoryServices.addCategory({category : $scope.categoryInput})
                .then(function (response) { 
                    $rootScope.alert = {
                        message : response.data.message,
                        type : 'success'
                    }
                    $scope.categoryInput = ''
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