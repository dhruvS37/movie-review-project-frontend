
angular.module('movie')
    .component('movieInfoForm',{
        templateUrl : './movie/movie-info-form.tpl.html',
        controller : ['$scope',function movieInfoFormController($scope){
            $scope.movieInfoData = [];
        }]
    })

    .component('movieList', {
        templateUrl : './movie/movie-info-table.tpl.html',
        controller : ['$scope','movieServices', function movieInfoTableController($scope,movieServices){
            $scope.movies = []
        }],

    })