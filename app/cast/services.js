angular.module('cast')
    .factory('castServices', ['$http','globalSetting', function ($http,globalSetting){
        let service = {}
        const url = globalSetting.apiUrl+'/cast';

        service.getCastList = function (){
            return $http.get(url)
        }

        service.addCast = function (data){
            return $http.post(url, data)
        }

        return service;
    }])