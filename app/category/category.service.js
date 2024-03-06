angular.module('category')
    .factory('categoryServices', ['$http', function ($http){
        let service = {}

        service.getCategoryList = function (){
            $http.get('').then(function (response) { 
                console.log(response);
            })
        }

        service.addCategory = function (){
            $http.post('', {}).then(function (response) { 
                console.log(response);
            })
        }

        return service;
    }])