angular.module('authentication')
    .factory('authenticationService', ['$rootScope','$http','$cookies', function($rootScope,$http,$cookies){
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