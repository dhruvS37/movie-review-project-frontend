angular.module('authentication')
    .controller('loginController', ['$scope', '$rootScope', '$location', 'authenticationService', function ($scope, $rootScope, $location, authenticationService) {
        $scope.login = function () {
            authenticationService.login($scope.email, $scope.password, $scope.remember,
                function (response) {
                    // console.log($location);
                    authenticationService.setCredentials($scope.email, $scope.password)
                    $location.path('/home');
                },
                function (error) {
                    $scope.password = ""

                    $rootScope.alert = {
                        message: 'Login failed! Try again later',
                        type: 'danger'
                    }
                    $rootScope.error = {
                        email: error.data.email
                    }
                }
            )
        }

    }])
    .controller('registerController', ['$scope', '$rootScope', '$location', 'authenticationService', function ($scope, $rootScope, $location, authenticationService) {
        $scope.register = function () {
            authenticationService.register($scope.name, $scope.email, $scope.password, $scope.password_confirmation,
                function (response) {

                    $rootScope.alert = {
                        message: 'Registered Succesfully. Go Back to login',
                        type: 'success'
                    }
                    $scope.reset()

                },
                function (error) {
                    $scope.password_confirmation = ''

                    $rootScope.alert = {
                        message: 'Registered failed! Try again.',
                        type: 'danger'
                    }
                    $rootScope.error = {
                        name: error.data.name,
                        email: error.data.email,
                        password: error.data.password
                    }
                }
            )
        }

        $scope.reset = function () {
            $scope.name = ""
            $scope.email = ""
            $scope.password = ""
            $scope.password_confirmation = ""
        }
    }])

    .controller('forgotPasswordController', ['$scope', '$rootScope', '$location', 'authenticationService',
        function ($scope, $rootScope, $location, authenticationService) {
            $scope.sendPasswordResetLink = function () {

                authenticationService.sendResetLinkEmail($scope.email,
                    function (response) {

                        $rootScope.alert = {
                            message: response.data.message,
                            type: 'success'
                        }
                        $scope.email = ""

                    },
                    function (error) {
                        console.log(error);
                        $rootScope.alert = {
                            message: error.email,
                            type: 'danger'
                        }
                        $rootScope.error = {
                            email: error.data.email,
                        }
                    })
            }


        }]
    )

    .controller('resetPasswordController', ['$scope', '$rootScope', '$location', 'authenticationService',
        function ($scope, $rootScope, $location, authenticationService) {
            $scope.reset = function () {
                let token = $location.path().slice(7);
                // console.log(token);
                authenticationService.resetPassword($scope.email, $scope.password, $scope.password_confirmation,token,
                    function (response) {

                        $rootScope.alert = {
                            message: response.data.message,
                            type: 'success'
                        }
                        $scope.email = ""
                        $scope.password = ''
                        $scope.password_confirmation = ''

                    },
                    function (error) {
                        // console.log(error);
                        $rootScope.alert = {
                            message: error.data.email,
                            type: 'danger'
                        }
                        $rootScope.error = {
                            email: error.data.email,
                            password: error.data.password
                        }
                    })
            }


        }]
    )