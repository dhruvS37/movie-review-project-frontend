'use strict';

angular.module('movie', []);
angular.module('category', []);
angular.module('cast', [])
angular.module('authentication',[])
angular.module('filterData',[])

angular.module('movieReview', [
  'ngRoute',
  'ngCookies',
  'movie', 
  'category',
  'cast',
  'filterData',
  'authentication',
]);