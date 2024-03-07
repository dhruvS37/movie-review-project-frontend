angular.module('movie')
    .controller('movieInfoController', ['$scope', 'movieServices', function ($scope, movieServices) {
        $scope.categories = []
        $scope.casts = []
        $scope.movies = []
        $scope.movieToUpdate = undefined

        movieServices.getMoviesInfo().then(response => {

            $scope.categories.push(response.data.categories)
            $scope.casts.push(response.data.casts)
            $scope.movies.push(response.data.movies)

        })
    }])

    .controller('movieInfoFormController', ['$scope', 'movieServices','$cookies', function ($scope, movieServices,$cookies) {
        $scope.selectedCast = []

        // let csrfToken = $cookies.getAll();
        console.log($cookies.get('XSRF-TOKEN'));
        $scope.$on('fillDataInForm', function(event,data){
            $scope.movieToUpdate = data.id

            console.log($scope.categories[0]);
            $scope.movieName = data.movie_name
            $scope.categories[0].forEach(element => {
              
                if(data.categories.includes(element.category))
                    element.selected = true
                else
                    element.selected = false
            })
            

        })

        $scope.formSubmit = function () {
            let selectedCategory = $scope.categories[0].reduce(function (acc, cur) {

                if (cur.hasOwnProperty('selected') && cur.selected) {
                    acc.push(cur.category)
                }
                return acc;
            }, []);

            movieServices.addMovie({
                movieName: $scope.movieName,
                category: selectedCategory,
                castAndCrew: $scope.selectedCast,
                rating: $scope.selectedRating
            })
            .then(function (response) { 
                console.log(response);
            })

            $scope.reset()
        }

        $scope.reset = function (e) {

            $scope.movieName = ''
            $scope.categories[0].forEach(element => {
                element.selected = false
            });
            $scope.selectedCast = null
        }
    }])

    .controller('movieListController', ['$scope','$rootScope','movieServices', function ($scope,$rootScope, movieServices){

        $scope.fillDataInForm = function (data){

            let dataToFill = { ...data }
            dataToFill.categories = dataToFill.categories.split(',');
            dataToFill.cast_crew = dataToFill.cast_crew.split(',');

            $rootScope.$broadcast('fillDataInForm',dataToFill)

        }
    }])


