angular.module('movie')
    .factory('movieServices', ['$http', function($http){
        let service = {}

        service.getMoviesInfo = function (){
            $http.get('').then(function (response) { 
                console.log(response);
            })
        }
        service.getMoviesInfoById = function (){
            $http.get('').then(function (response) { 
                console.log(response);
            })
        }

        service.addMovie = function (){
            $http.post('', {}).then(function (response) { 
                console.log(response);
            })
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