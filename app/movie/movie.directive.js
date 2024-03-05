angular.module('movie')
    .directive('movieInfoForm', function(){
        return {
            templateUrl : './movie/movie-info-form.tpl.html'
        }
    })
    .directive('movieInfoTable', function(){
        return {
            templateUrl : './movie/movie-info-table.tpl.html'
        }
    })