angular.module('movie')
    .controller('movieInfoController', ['$scope', '$rootScope', 'movieServices', function ($scope, $rootScope, movieServices) {
        $scope.categories
        $scope.casts
        $scope.movies
        $scope.movieToUpdate = undefined
        $scope.alert = null

        $scope.initializeHome = function () {
            $scope.categories = []
            $scope.casts = []
            $scope.movies = []

            movieServices.getMoviesInfo().then(
                function (response) {

                    $scope.categories.push(response.data.categories)
                    $scope.casts.push(response.data.casts)
                    $scope.movies.push(response.data.movies)
                },
                function (error) {
                    console.log(error);
                })

        }

        $scope.setErrorMessage = function (data) {
            let alert = { message: '' }
            if ('movieName' in data)
                alert.message += data.movieName + "\n"
            if ('category' in data)
                alert.message += data.category + "\n"
            if ('rating' in data)
                alert.message += data.rating + "\n"
            if ('message' in data)
                alert.message += data.message

            $scope.alert = alert
        }
        $scope.initializeHome()
    }])

    .controller('movieInfoFormController', ['$scope', 'movieServices', '$timeout', '$rootScope', function ($scope, movieServices, $timeout, $rootScope) {
        $scope.selectedCast = []
        $scope.isChecked = true
        $scope.$on('fillDataInForm', function (event, data) {
            $scope.movieToUpdate = data.id

            $scope.movieName = data.movie_name

            $scope.categories[0].forEach(element => {

                if (data.categories.includes(element.category))
                    element.selected = true
                else
                    element.selected = false
            })

            $timeout(function () {
                jQuery('#castAndCrewInput').val(data.cast_crew).trigger('change');
                jQuery('#ratingInput').val(data.rating).trigger('change');
            })

        })

        $scope.formSubmit = function () {

            let selectedCategory = $scope.categories[0].reduce(function (acc, cur) {

                if (cur.hasOwnProperty('selected') && cur.selected) {
                    acc.push(cur.category)
                }
                return acc;
            }, []);

            const newData = {
                movieName: $scope.movieName,
                category: selectedCategory,
                castAndCrew: $scope.selectedCast,
                rating: $scope.selectedRating
            }
            if (!$scope.movieToUpdate) {

                movieServices.addMovie(newData)
                    .then(function (response) {
                        $scope.setErrorMessage(response.data)
                        $scope.alert.type = 'success'
                        $scope.initializeHome()
                    })
                    .catch(function (error) {
                        $scope.setErrorMessage(error.data)
                        $scope.alert.type = 'danger'
                    })
            } else {
                newData.id = $scope.movieToUpdate;

                movieServices.updateMovie(newData)
                    .then(function (response) {
                        // console.log(response);
                        $scope.setErrorMessage(response.data)
                        $scope.alert.type = 'success'
                        $scope.initializeHome()

                    })
                    .catch(function (error) {
                        $scope.setErrorMessage(error.data)
                        $scope.alert.type = 'danger'
                    })

            }
            $scope.reset()
        }


        $scope.reset = function (e) {

            $scope.movieToUpdate = undefined

            $timeout(function () {

                jQuery("#movieNameInput").val(null);
                jQuery('.checkInput').prop("checked", false)
                jQuery('#castAndCrewInput').val(null).trigger('change');
                jQuery('#ratingInput').val(null).trigger('change');
            })
        }
    }])

    .controller('movieListController', ['$scope', '$rootScope', 'movieServices', function ($scope, $rootScope, movieServices) {

        $scope.fillDataInForm = function (data) {

            let dataToFill = { ...data }
            dataToFill.categories = dataToFill.categories.split(',');
            dataToFill.cast_crew = dataToFill.cast_crew.split(',');

            $rootScope.$broadcast('fillDataInForm', dataToFill)

        }

        $scope.deleteMovie = function (id) {
            movieServices.deleteMovie(id)
                .then(function (response) {
                    $scope.setErrorMessage(response.data)
                    $scope.alert.type = 'success'
                    $scope.initializeHome()
                })
                .catch(function (error) {
                    $scope.setErrorMessage(error.data)
                    $scope.alert.type = 'danger'
                })

        }
    }])


