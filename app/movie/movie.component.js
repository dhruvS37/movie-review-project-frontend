
angular.module('movie')
    .directive('movieInfoForm', function () {
        return {
            templateUrl: './movie/movie-info-form.tpl.html',
            controller :'movieInfoFormController'
        }
    })


    .directive('movieList', function () {
        return {
            templateUrl: './movie/movie-info-table.tpl.html',
            controller : 'movieListController'
            // controller : ['movieServices', function movieInfoTableController(movieServices){

            //     // this.movies = this.movies
            //     // movieServices.getMoviesInfo().then( response =>{
            //     //     $scope.movies.push(response.data.movies)
            //     //     console.log($scope.movies);
            //     // })

            // }],
        }

    })
// function movieInfoFormController(){
//     $scope.movieInfoData = [];
// }