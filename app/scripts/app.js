'use strict';

/**
 * @ngdoc overview
 * @name dripDrankDrunkMoblieApp
 * @description
 * # dripDrankDrunkMoblieApp
 *
 * Main module of the application.
 */
angular
  .module('dripDrankDrunkMoblieApp', [
    'ngResource',
    'ui.router',
    'ngSanitize'
  ])
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/user', '/user/history');

    $urlRouterProvider.otherwise('/');
    $stateProvider
      // .state('user', {
      //   url: '/user',
      //   abstract: true,
      //   templateUrl: 'views/user.html',
      //   controller: 'UserCtrl',
      //   controllerAs: 'user'
      // })
      .state('home', {
        url: '/',
        abstract: false,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        abstract: false,
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
