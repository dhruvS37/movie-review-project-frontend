angular.module('category')
    .factory('categoryServices', ['$http', function ($http){
        let service = {}

        service.getCategoryList = function (){
            return $http.get('http://127.0.0.1:8000/category')
        }

        service.addCategory = function (data){
            return $http.post('http://127.0.0.1:8000/category', data)
        }

        return service;
    }])