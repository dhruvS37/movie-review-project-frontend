angular.module('cast')
    .factory('castServices', ['$http', function ($http){
        let service = {}

        service.getCastList = function (){
            $http.get('').then(function (response) { 
                console.log(response);
            })
        }

        service.addCast = function (data){
            $http.post('', {}).then(function (response) { 
                console.log(response);
            })
        }

        return service;
    }])