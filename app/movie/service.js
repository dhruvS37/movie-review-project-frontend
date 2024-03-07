angular.module('movie')
    .factory('movieServices', ['$http', function($http){
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
            // console.log(data);
            return $http.post('http://127.0.0.1:8000/home', data)
        }

        service.updateMovieInfo = function (){
            $http.put('', {}).then(function (response) { 
                console.log(response);
            })
        }

        service.deleteMovie = function (){
            $http.delete('').then(function (response) { 
                console.log(response);
            })
        }
        return service;
    }])