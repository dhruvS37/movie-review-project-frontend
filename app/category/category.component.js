
angular.module('category')
    .component('categoryInsert',{
        templateUrl : './category/category-insert-form.tpl.html',
        controller : ['$scope','categoryServices',function categoryInsertController($scope,categoryServices){
            $scope.addCategory = function(){
                
            }
        }]
    })