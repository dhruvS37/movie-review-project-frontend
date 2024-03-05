'use strict';

angular.module('movieReview').config(['$routeProvider',

    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: './pages/home.html'
            }).
            when('/category', {
                templateUrl: './category-list/category-insert-form.tpl.html'
            }).
            when('/cast', {
                templateUrl: './cast-list/cast-insert-form.tpl.html'
            }).
            otherwise('/');
    }
]);