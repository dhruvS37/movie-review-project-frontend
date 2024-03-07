'use strict';

angular.module('movieReview').config(['$routeProvider','$httpProvider',

    function ($routeProvider,$httpProvider) {
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
                templateUrl: './pages/login.html'
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
            .otherwise('/home');

        
    }
])