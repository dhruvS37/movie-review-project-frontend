angular.module('movie')
    .factory('movieServices', ['$http','$cookies', function($http,$cookies){
        let service = {}

        service.getMoviesInfo = function (){
            return $http.get('http://127.0.0.1:8000/home')
        }
        service.getMoviesInfoById = function (){
            $http.get('http://127.0.0.1:8000/home').then(function (response) { 
                console.log(response);
            })
        }
        
        service.addMovie = function (data){
            console.log($cookies.get('XSRF-TOKEN'));
            return $http.post('http://127.0.0.1:8000/home', data)
        }

        service.updateMovie = function (data){
            return $http.put('http://127.0.0.1:8000/home/'+data.id, data)
        }

        service.deleteMovie = function (id){
            // console.log(data);

            return $http.delete('http://127.0.0.1:8000/home/'+id, id)
        }
        return service;
    }])