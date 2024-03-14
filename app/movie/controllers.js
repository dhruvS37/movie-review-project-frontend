angular.module('movie')
    .controller('movieInfoController', ['$scope', 'movieServices', 'categoryServices', 'castServices', 'errors', function ($scope, movieServices, categoryServices, castServices, errors) {
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

                    $scope.movies.push(response.data.movies)
                }, function (error) {
                errors.clearAlertTimeout()
                $scope.alert = errors.setAlertMessage(error.data, 'danger')
                errors.setAlertTimeout($scope.alert)

            })

            castServices.getCastList()
                .then(function (response) {
                    $scope.casts.push(response.data.casts)

                }, function (error) {
                errors.clearAlertTimeout()
                $scope.alert = errors.setAlertMessage(error.data, 'danger')
                errors.setAlertTimeout($scope.alert)

            })

            categoryServices.getCategoryList()
                .then(function (response) {
                    $scope.categories.push(response.data.categories)

                }, function (error) {
                errors.clearAlertTimeout()
                $scope.alert = errors.setAlertMessage(error.data, 'danger')
                errors.setAlertTimeout($scope.alert)

            })

        

        }
        $scope.initializeHome()
    }])

    .controller('movieInfoFormController', ['$scope', 'movieServices', '$timeout', '$rootScope', 'errors', function ($scope, movieServices, $timeout, $rootScope, errors) {
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
                        errors.clearAlertTimeout()
                        $scope.alert = errors.setAlertMessage(response.data, 'success')
                        errors.setAlertTimeout($scope.alert)

                        $scope.initializeHome()
                    })
                    .catch(function (error) {
                        errors.clearAlertTimeout()
                        $scope.alert = errors.setAlertMessage(error.data, 'danger')
                        errors.setAlertTimeout($scope.alert)
                    })
            } else {
                newData.id = $scope.movieToUpdate;

                movieServices.updateMovie(newData)
                    .then(function (response) {
                        // console.log(response);
                        errors.clearAlertTimeout()
                        $scope.alert = errors.setAlertMessage(response.data, 'success')
                        errors.setAlertTimeout($scope.alert)

                        $scope.initializeHome()

                    })
                    .catch(function (error) {
                        errors.clearAlertTimeout()
                        $scope.alert = errors.setAlertMessage(error.data, 'danger')
                        errors.setAlertTimeout($scope.alert)
                    })

            }
            $scope.reset()
        }


        $scope.reset = function (e) {

            $scope.movieToUpdate = undefined

            $scope.movieName = '';
            $scope.categories[0].forEach(element => {
                element.selected = false
            })

            $timeout(function () {

                // jQuery("#movieNameInput").val(null);
                // jQuery('.checkInput').prop("checked", false)
                jQuery('#castAndCrewInput').val(null).trigger('change');
                jQuery('#ratingInput').val(null).trigger('change');
            })
        }
    }])

    .controller('movieListController', ['$scope', '$rootScope', 'movieServices', 'errors', function ($scope, $rootScope, movieServices, errors) {

        $scope.fillDataInForm = function (data) {

            let dataToFill = { ...data }
            dataToFill.categories = dataToFill.categories.split(',');
            dataToFill.cast_crew = dataToFill.cast_crew.split(',');

            $rootScope.$broadcast('fillDataInForm', dataToFill)

        }

        $scope.deleteMovie = function (id) {
            movieServices.deleteMovie(id)
                .then(function (response) {
                    errors.clearAlertTimeout()
                    $scope.alert = errors.setAlertMessage(response.data, 'success')
                    errors.setAlertTimeout($scope.alert)

                    $scope.initializeHome()
                })
                .catch(function (error) {
                    errors.clearAlertTimeout()
                    $scope.alert = errors.setAlertMessage(error.data, 'danger')
                    errors.setAlertTimeout($scope.alert)

                })

        }
    }])


