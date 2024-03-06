'use strict';

angular.module('movie', []);
angular.module('category', []);
angular.module('cast', [])

angular.module('movieReview', [
  'ngRoute',
  'movie', 
  'category',
  'cast',
  // 'movieServices'
]);