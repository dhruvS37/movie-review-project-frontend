
angular.module('category')
    .component('categoryInsert',{
        templateUrl : './category/category-insert-form.tpl.html',
        controller : ['$scope','$rootScope','categoryServices',function categoryInsertController($scope,$rootScope,categoryServices){
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

            $scope.addCategory = function(){
                categoryServices.addCategory({category : $scope.categoryInput})
                .then(function (response) { 
                    $scope.setErrorMessage(response.data)
                    $scope.alert.type = 'success'

                    $scope.categoryInput = ''
                })
                .catch(function(error){
                    $scope.setErrorMessage(error.data)
                    $scope.alert.type = 'danger'
                })
            }
        }]
    })