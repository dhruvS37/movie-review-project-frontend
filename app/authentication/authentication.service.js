angular.module('authentication')
    .factory('authenticationService', ['$rootScope','$http','$cookies','$document', function($rootScope,$http,$cookies,$document){
        let service = {}

        service.login = function (username,password,remmember=false, success , failure){

            $http.post('http://127.0.0.1:8000/login',{email: username,password: password,remmember: remmember})
            .then(function(response){
                success(response)
            },function(error){
                failure(error)
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

        service.register = function(name,username,password,password_confirmation, success , failure){
            $http.post('http://127.0.0.1:8000/register',{ name : name, email: username, password: password, password_confirmation: password_confirmation})
            .then(function(response){
                success(response)
            },function(error){
                failure(error)
            })
        }

        service.sendResetLinkEmail = function(email, success, failure){
            $http.post('http://127.0.0.1:8000/password/email',{ email: email})
            .then(function(response){
                success(response)
            },function(error){
                failure(error)
            })
        }

        service.resetPassword = function(email,password,password_confirmation,token,success,failure){
            $http.post('http://127.0.0.1:8000/password/reset',{email: email, password: password, password_confirmation: password_confirmation,token:token})
            .then(function(response){
                success(response)
            },function(error){
                failure(error)
            })
        }
        service.logout = function(){
            $http.post('http://127.0.0.1:8000/logout')
            .then(function(response){
                success(response)
            },function(error){
                failure(error)
            })
        }

    
        return service;
    }])