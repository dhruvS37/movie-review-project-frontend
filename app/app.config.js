'use strict';

angular.module('movieReview')
    .config(['$routeProvider', '$httpProvider',

        function ($routeProvider, $httpProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: './pages/home.html',
                    controller: 'movieInfoController'
                })
                .when('/filter', {
                    templateUrl: './pages/filter.html',
                    controller: 'movieFilterController'
                })
                .when('/category', {
                    template: '<category-insert></category-insert>'
                })
                .when('/cast', {
                    template: '<cast-insert> </cast-insert>'
                })
                .when('/login', {
                    templateUrl: './pages/login.html',
                    controller: 'loginController'
                })
                .when('/register', {
                    templateUrl: './pages/register.html'
                })
                .when('/email', {
                    templateUrl: './pages/email.html'
                })
                .when('/reset', {
                    templateUrl: './pages/reset.html'
                })
                .otherwise('/login');

            $httpProvider.defaults.withCredentials = true
        }
    ])
    .run(['$rootScope', '$location', '$cookies', '$http',
        function ($rootScope, $location, $cookies, $http) {

            $rootScope.globals = $cookies.get('globals') ? JSON.parse($cookies.get('globals')) : {};

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
                console.log($rootScope.globals);
                $rootScope.currentLocation = $location.path()
                
                if (($location.path() == '/home' || $location.path() == '/filter') && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
            });

            $rootScope.logout = function () {
                $http.post('http://127.0.0.1:8000/logout')
                    .then(function (response) {
                        if (response.status == 200) {
                            $cookies.remove('globals')
                            $rootScope.globals = {}
                            $location.path('/login')
                        }
                    }, function (error) {
                        console.log(error);
                    })
            }
        }
    ])