angular.module('movie')
    .controller('movieInfoController', ['$scope','movieServices', function ($scope, movieServices) {
        $scope.categories = []
        $scope.casts = []
        $scope.movies = ['dfvdsf']
        
        movieServices.getMoviesInfo().then(response => {

            $scope.categories.push(response.data.categories)
            $scope.casts.push(response.data.casts)
            $scope.movies.push(response.data.movies)

            console.log($scope.movies);
        })
    }])