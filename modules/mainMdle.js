//main module
'use strict';
var pscoreApp = angular.module('pscoreApp',['ngRoute','ngResource']).
config(function($routeProvider){
  $routeProvider.when('/pscore',{
    templateUrl: 'views/pscore.html'
  });

  $routeProvider.when('/about',{
    templateUrl: 'views/about.html'
  });

  $routeProvider.when('/activities',{
    templateUrl: 'views/activities.html'
  });

  $routeProvider.when('/education',{
    templateUrl: 'views/education.html'
  });

  $routeProvider.when('/news', {
    templateUrl: 'views/news.html'
  });

  $routeProvider.when('/media', {
    templateUrl: 'views/media.html'
  });

  $routeProvider.otherwise({
    templateUrl: 'views/pscore.html'
  });
});

