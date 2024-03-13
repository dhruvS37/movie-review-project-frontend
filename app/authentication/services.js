angular.module('authentication')
    .factory('authenticationService', ['$rootScope', '$http', '$cookies', '$document', function ($rootScope, $http, $cookies, $document) {
        let service = {}

        service.getCsrfToken = function(){
            return $http.get('http://127.0.0.1:8000/welcome')
        }

        service.login = function (username, password, remmember = false, success, failure) {
            this.getCsrfToken().then(function (response) {
                
                $http.post('http://127.0.0.1:8000/login', {email: username, password: password, remmember: remmember})
                    .then(function (response) {
                        success(response)
                    }, function (error) {
                        failure(error)
                    })
            })
            
        }

        service.setCredentials = function (username) {

            $rootScope.globals = {
                currentUser: {
                    username: username,
                }
            };
            $cookies.put('globals', JSON.stringify($rootScope.globals));
        }

        service.register = function (name, username, password, password_confirmation, success, failure) {
            this.getCsrfToken().then(function (response) {

            $http.post('http://127.0.0.1:8000/register', { name: name, email: username, password: password, password_confirmation: password_confirmation })
                .then(function (response) {
                    success(response)
                }, function (error) {
                    failure(error)
                })
            })
        }

        service.sendResetLinkEmail = function (email, success, failure) {
            this.getCsrfToken().then(function (response) {

            $http.post('http://127.0.0.1:8000/password/email', { email: email })
                .then(function (response) {
                    success(response)
                }, function (error) {
                    failure(error)
                })
            })
        }

        service.resetPassword = function (email, password, password_confirmation, token, success, failure) {
            this.getCsrfToken().then(function (response) {

            $http.post('http://127.0.0.1:8000/password/reset', { email: email, password: password, password_confirmation: password_confirmation, token: token })
                .then(function (response) {
                    success(response)
                }, function (error) {
                    failure(error)
                })
            })
        }
        service.logout = function () {
            $http.post('http://127.0.0.1:8000/logout')
                .then(function (response) {
                    success(response)
                }, function (error) {
                    failure(error)
                })
        }


        return service;
    }])

    .factory('errors', function () {
        let service = {}

        service.setAlertMessage = function (data) {
            let alert = {
                message: ''
            }
            if ('movieName' in data)
                alert.message += data.movieName + "\n"
            if ('category' in data)
                alert.message += data.category + "\n"
            if ('rating' in data)
                alert.message += data.rating + "\n"
            if ('message' in data)
                alert.message += data.message
            if ('email' in data)
                alert.message += data.email + "\n"
            if ('password' in data)
                alert.message += data.password + "\n"
            if ('name' in data)
                alert.message += data.name + "\n"

            return alert;
        }

        service.setValidationErrors = function (data) {
            let error = {}

            if ('movieName' in data)
                error.movieName = data.movieName + "\n"
            if ('category' in data)
                alert.category = data.category + "\n"
            if ('rating' in data)
                error.rating = data.rating + "\n"
            if ('email' in data)
                error.email = data.email + "\n"
            if ('password' in data)
                error.password = data.password + "\n"
            if ('name' in data)
                error.name = data.name + "\n"

            return error;
        }

        return service;
    })