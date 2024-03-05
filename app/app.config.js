'use strict';

angular.module('movieReview').config(['$routeProvider',

    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                template: '<h1>jbdjsad</h1>'
            }).
            when('/phones/:phoneId', {
                template: '<phone-detail></phone-detail>'
            }).
            otherwise('/');
    }
]);