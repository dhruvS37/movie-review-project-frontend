'use strict';

angular.module('movie', []);
angular.module('movieFilters', []);
angular.module('category', []);
angular.module('cast', [])

angular.module('movieReview', [
  'ngRoute',
  'movie', 
  'category',
  'cast',
  'movieFilters'
  // 'movieServices'
]);