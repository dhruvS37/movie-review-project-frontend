'use strict';

angular.module('movieReview')
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider,) {

            $routeProvider
                .when('/home', {
                    templateUrl: './pages/home.html',
                    controller: 'movieInfoController'
                })
                .when('/filter', {
                    templateUrl: './pages/filter.html',
                    controller: 'dataFilterController'
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
                    template: '<h1 class="text-center">Welcome</h1>',

                });
        }
    ])