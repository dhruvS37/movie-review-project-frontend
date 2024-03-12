
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
        }

    })
