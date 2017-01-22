'use strict';

/**
 * @ngdoc function
 * @name dripDrankDrunkMoblieApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dripDrankDrunkMoblieApp
 */
angular.module('dripDrankDrunkMoblieApp')
  .controller('LoginCtrl', ['$scope', 'AuthService', 'DDService','$state', function ($scope, AuthService,DDService, $state) {
    

    var loginPageSetup = function () {
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
          onSuccess: function (event, fields) {
            //what happens when the form is filed in            
            if (event) {
              event.preventDefault();
            }
            authenticate(fields);
            return false;

          },
          onFailure: function (formErrors, fields) {
            return; // What happens when the form is not filed out
          }
        });

      var authenticate = function (fields) {
        $('.ui.login.button').addClass('disabled');
        AuthService.login(fields.username, fields.password, function (token, err) {
          if (err) {
            $('.ui.error.message').html(
              '<ui class="list"><li>Invalid Username or Password</li></ui>').show();
            $('.ui.login.button').removeClass('disabled');
          } else {
            DDService.getDD();
          }
        });
      };
    };

    $scope.$on('$viewContentLoaded', function () {
      loginPageSetup();
    });
  }]);

