'use strict';

/**
 * @ngdoc function
 * @name dripDrankDrunkMoblieApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dripDrankDrunkMoblieApp
 */
angular.module('dripDrankDrunkMoblieApp')
  .controller('LoginCtrl', ['$scope', '$state', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var loginPageSetup = function () {

    };

    $scope.$on('$viewContentLoaded', function () {
      loginPageSetup();
    });

    $('.ui.form')
      .form({
        fields: {
          username: {
            identifier: 'username',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your username'
              }
            ]
          },
          password: {
            identifier: 'password',
            rules: [
              {
                type: 'empty',
                prompt: 'Please enter your password'
              }
            ]
          }
        },
        inline: true,
        onSuccess: function () {
          $state.go('\dd');
        }
      });
  }]);

