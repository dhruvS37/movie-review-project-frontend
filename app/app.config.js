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
            .otherwise('/home');

        // $httpProvider.defualtS.xsrfTrustedOrigins = []
        // $httpProvider.defualtS.xsrfTrustedOrigins.push('self','http://127.0.0.1:8000/**')
        
    }
])
.run(function($injector,$http){
    $http.defaults.xsrfTrustedOrigins = []
    $http.defaults.xsrfTrustedOrigins.push('self','http://127.0.0.1:8000/**')

})