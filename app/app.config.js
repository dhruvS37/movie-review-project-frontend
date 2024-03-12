'use strict';

angular.module('movieReview')
    .config(['$routeProvider', '$httpProvider',

        function ($routeProvider, $httpProvider,) {
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
                    templateUrl: './pages/register.html',
                    controller: 'registerController'
                })
                .when('/email', {
                    templateUrl: './pages/forgot.html',
                    controller: 'forgotPasswordController'
                })
                .when('/reset/:token', {
                    templateUrl: './pages/reset.html',
                    controller: 'resetPasswordController'
                })
                .when('/', {
                    template: '<h1>Welcome</h1>',

                });

                  
            $httpProvider.defaults.withCredentials = true
            $httpProvider.defaults.xsrfCookieName = 'XSRF-TOKEN'
            $httpProvider.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'
            
        }
    ])
    .run(['$rootScope', '$location', '$cookies', '$http',
        function ($rootScope, $location, $cookies, $http) {

            $rootScope.globals = $cookies.get('globals') ? JSON.parse($cookies.get('globals')) : {};

            $http.get('http://127.0.0.1:8000/welcome').then(function (response) {
                $rootScope.appName = response.data;
            })

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in

                if (($location.path() == '/home' || $location.path() == '/filter') && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
                $rootScope.currentLocation = $location.path()
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