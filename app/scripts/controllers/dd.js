'use strict';

/**
 * @ngdoc function
 * @name dripDrankDrunkMoblieApp.controller:DdCtrl
 * @description
 * # DdCtrl
 * Controller of the dripDrankDrunkMoblieApp
 */
angular.module('dripDrankDrunkMoblieApp')
  .controller('DdCtrl', ['$scope', '$state', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var ddPageSetup = function () {
      $('.ui.form')
        .form({
          fields: {
            name: {
              identifier: 'name',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please enter your DD&apos;s name'
                }
              ]
            },
            pnum: {
              identifier: 'pnum',
              rules: [
                {
                  type: 'integer[1000000000..9999999999]',
                  prompt: 'Please enter your DD&apos;s phone number as a 10 digit number'
                }
              ]
            }
          },
          inline: true,
          onSuccess: function (event, fields) {
            $state.go('drink');
          }
        });
    };

    $scope.$on('$viewContentLoaded', function () {
      ddPageSetup();
    });

    $scope.advance = function () {
      $state.go('drink');
    };



  }]);
