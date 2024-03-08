angular.module('authentication')
    .controller('loginController', ['$scope', 'authenticationService', function($scope,authenticationService){
        $scope.login = function (){
            authenticationService.login($scope.email,$scope.password,$scope.remember, function(response){
                console.log(response);
            })
        }
    }])