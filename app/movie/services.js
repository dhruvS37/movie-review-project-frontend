angular.module('movie')
    .factory('movieServices', ['$http','globalSetting', function($http,globalSetting){
        let service = {}
        const url = globalSetting.apiUrl+'/home';

        service.getMoviesInfo = function (){
            return $http.get(url)
        }
        service.getMoviesInfoById = function (){
            $http.get(url).then(function (response) { 
                console.log(response);
            })
        }
        
        service.addMovie = function (data){
            return $http.post(url, data)
        }

        service.updateMovie = function (data){

            return $http.put(url+'/'+data.id, data)
        }

        service.deleteMovie = function (id){
            // console.log(data);

            return $http.delete(url+'/'+id, id)
        }
        return service;
    }])