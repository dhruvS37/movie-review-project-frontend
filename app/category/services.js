angular.module('category')
    .factory('categoryServices', ['$http','globalSetting', function ($http,globalSetting){
        let service = {}
        const url = globalSetting.apiUrl+'/category';

        service.getCategoryList = function (){
            return $http.get(url)
        }

        service.addCategory = function (data){
            return $http.post(url, data)
        }

        return service;
    }])