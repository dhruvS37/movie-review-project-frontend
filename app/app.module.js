'use strict';

angular.module('movie', []);
angular.module('movieFilters', []);
angular.module('category', []);
angular.module('cast', [])

angular.module('movieReview', [
  'ngRoute',
  'ngCookies',
  'movie', 
  'category',
  'cast',
  'movieFilters'
  // 'movieServices'
]);