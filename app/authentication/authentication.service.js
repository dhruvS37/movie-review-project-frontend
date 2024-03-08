angular.module('authentication')
    .factory('authenticationService', ['$rootScope','$http', function($rootScope,$http){
        let service = {}

        service.login = function (username,password,remmember=false, callback){
            $http.post('http://127.0.0.1:8000/login',{email: username,password: password,remmember: remmember})
            .then(function(response){
                callback(response)
            })
        }

        return service;
    }])