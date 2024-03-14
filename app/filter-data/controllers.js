angular.module('filterData')
    .controller('dataFilterController', function ($scope, $location, categoryServices, movieServices) {
        let urlFragment = $location.search()
        const urlHashPara = {
            sortOrder: urlFragment['sort'],
            categories : urlFragment['category[]'],
            rating : urlFragment['rating[]']
        }
        // console.log(urlHashPara);

        // console.log($scope.sortOrder);
        // $scope.selectedCategories
        $scope.ratingList = [{val:1,selected:false},{val:2,selected:false},{val:3,selected:false},{val:4,selected:false},{val:5,selected:false}]
        categoryServices.getCategoryList()
            .then(function (response) {
                $scope.categoriesList = response.data.categories; 
            })
        movieServices.getMoviesInfo()
            .then(function(response){
                $scope.movieList = response.data.movies
            })
    })