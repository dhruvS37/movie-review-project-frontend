
angular.module('movie')
    .component('movieInfoForm',{
        templateUrl : './movie/movie-info-form.tpl.html',
        controller : function movieInfoFormController(){
            $scope.movieInfoData = [];
        }
    })

    .component('movieList', {
        bindings: {
            movies : '<'
        },
        templateUrl : './movie/movie-info-table.tpl.html',
        // controller : ['movieServices', function movieInfoTableController(movieServices){
            
        //     // $scope.movies = []
        //     // movieServices.getMoviesInfo().then( response =>{
        //     //     $scope.movies.push(response.data.movies)
        //     //     console.log($scope.movies);
        //     // })
            
        // }],

    })