angular.module('cast')
    .factory('castServices', ['$http', function ($http){
        let service = {}

        service.getCastList = function (){
            return $http.get('http://127.0.0.1:8000/cast')
        }

        service.addCast = function (data){
            return $http.post('http://127.0.0.1:8000/cast', data)
        }

        return service;
    }])