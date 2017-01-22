'use strict';

(function () {
    var app = angular.module('dripDrankDrunkMoblieApp', ['DataManager', 'ui.router', 'ngSanitize', 'angular-centered']);
    app.run(function ($state, $rootScope) {
            $rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams, error) {
                if (angular.isObject(error) && angular.isString(error.code)) {
                    switch (error.code) {
                        case 'NOT_AUTH':
                            // go to the login page
                            $state.go('home');
                            break;
                        case 'ALREADY_AUTH':
                            //go to the dash board
                            $state.go('user.dd');
                            break;
                        default:
                            // set the error object on the error state and go there
                            $state.get('error').error = error;
                            $state.go('error');
                    }
                }
                else {
                    // unexpected error
                    $state.go('home');
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('user', {
                    url: '/user',
                    abstract: true,
                    templateUrl: 'views/user.html',
                    controller: 'UserCtrl',
                    controllerAs: 'user',
                    resolve: {
                        security: ['$q', function ($q) {
                            if (!hasAccess()) {
                                return $q.reject({code: 'NOT_AUTH'});
                            }
                        }]
                    }
                })
                .state('home', {
                    url: '/',
                    abstract: false,
                    templateUrl: 'views2/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'login',
                    resolve: {
                        security: ['$q', function ($q) {
                            if (hasAccess()) {
                                return $q.reject({code: 'ALREADY_AUTH'});
                            }
                        }]
                    }
                })
                .state('user.drink', {
                    url: '/drink',
                    abstract: false,
                    templateUrl: 'views2/drink.html',
                    controller: 'DrinkCtrl',
                    controllerAs: 'drink',

                })
                .state('user.dd', {
                    url: '/wingman',
                    abstract: false,
                    templateUrl: 'views2/dd.html',
                    controller: 'DdCtrl',
                    controllerAs: 'dd'
                })
                .state('user.bac', {
                    url: '/bac',
                    abstract: false,
                    templateUrl: 'views2/bac.html',
                    controller: 'BacCtrl'
                })
        });

    app.exports = app;
})();
