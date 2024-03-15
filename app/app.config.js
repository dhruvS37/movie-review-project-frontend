'use strict';

angular.module('movieReview')
    .config(['$httpProvider','globalSettingProvider', function ($httpProvider,globalSettingProvider) {

        $httpProvider.defaults.withCredentials = true
        $httpProvider.defaults.xsrfCookieName = 'XSRF-TOKEN'
        $httpProvider.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'
        $httpProvider.xsrfWhitelistedOrigins.push('http://127.0.0.1:8000')
    }
    ])

    .run(['$rootScope', '$location', '$cookies', '$http','globalSetting',
        function ($rootScope, $location, $cookies, $http, globalSetting) {

            $rootScope.globals = $cookies.get('globals') ? JSON.parse($cookies.get('globals')) : {};

            $http.get(globalSetting.apiUrl+'/welcome').then(function (response) {
                $rootScope.appName = response.data;
                console.log($cookies.getAll());
            })


            $rootScope.$on('$locationChangeStart', function (event, next, current) {

                if (($location.path() == '/home' || $location.path() == '/filter') && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
                $rootScope.currentLocation = $location.path()
            });

            $rootScope.logout = function () {
                $http.post(globalSetting.apiUrl+'/logout')
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