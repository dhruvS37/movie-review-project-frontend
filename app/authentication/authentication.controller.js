angular.module('authentication')
    .controller('loginController', ['$scope', '$location', 'authenticationService', function ($scope, $location, authenticationService) {
        $scope.login = function () {
            authenticationService.login($scope.email, $scope.password, $scope.remember,
                function (response) {
                    // console.log($location);
                    authenticationService.setCredentials($scope.email,$scope.password)
                    $location.path('/home');
                },
                function (error) {
                    console.log(error);
                }
            )
        }
    }])