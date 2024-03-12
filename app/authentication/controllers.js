angular.module('authentication')
    .controller('loginController', ['$scope', '$rootScope', '$location', 'authenticationService', 'errors', function ($scope, $rootScope, $location, authenticationService, errors) {
        $scope.error = null

        $scope.login = function () {
            authenticationService.login($scope.email, $scope.password, $scope.remember,
                function (response) {
                    authenticationService.setCredentials(response.data.username)
                    $location.path('/home');
                },
                function (error) {
                    console.log(error);

                    $scope.password = ""

                    $scope.error = errors.setValidationErrors(error.data)

                    console.log($scope.error);
                }
            )
        }

    }])
    .controller('registerController', ['$scope', '$rootScope', '$location', 'authenticationService', 'errors', function ($scope, $rootScope, $location, authenticationService, errors) {
        $scope.error = null
        $scope.alert = null

        $scope.register = function () {
            authenticationService.register($scope.name, $scope.email, $scope.password, $scope.password_confirmation,
                function (response) {

                    $scope.alert = errors.setAlertMessage(response.data)
                    $scope.alert.type = 'success'
                    $scope.reset()

                },
                function (error) {
                    $scope.password_confirmation = ''

                    $scope.error = errors.setValidationErrors(error.data)
                    $scope.alert = errors.setAlertMessage(error.data)
                    $scope.alert.type = 'danger'

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

    .controller('forgotPasswordController', ['$scope', '$rootScope', '$location', 'authenticationService', 'errors',
        function ($scope, $rootScope, $location, authenticationService, errors) {
            $scope.error = null
            $scope.alert = null

            $scope.sendPasswordResetLink = function () {

                authenticationService.sendResetLinkEmail($scope.email,
                    function (response) {
                        console.log(response);

                        $scope.alert = errors.setAlertMessage(response.data)
                        $scope.alert.type = 'success'
                        $scope.email = ""

                    },
                    function (error) {
                        console.log(error);

                        $scope.error = errors.setValidationErrors(error.data)
                        $scope.alert = errors.setAlertMessage(error.data)
                        $scope.alert.type = 'danger'
                    })
            }


        }]
    )

    .controller('resetPasswordController', ['$scope', '$rootScope', '$location', 'authenticationService', 'errors',
        function ($scope, $rootScope, $location, authenticationService, errors) {
            $scope.reset = function () {
                $scope.error = null
                $scope.alert = null

                let token = $location.path().slice(7);
                authenticationService.resetPassword($scope.email, $scope.password, $scope.password_confirmation, token,
                    function (response) {
                        console.log(response);
                        $scope.alert = errors.setAlertMessage(response.data)
                        $scope.alert.type = 'success'
                        $scope.email = ""
                        $scope.password = ''
                        $scope.password_confirmation = ''

                    },
                    function (error) {
                        console.log(error);
                        $scope.error = errors.setValidationErrors(error.data)
                        $scope.alert = errors.setAlertMessage(error.data)
                        $scope.alert.type = 'danger'
                    })
            }


        }]
    )