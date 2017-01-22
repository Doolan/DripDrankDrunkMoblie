'use strict';

/**
 * @ngdoc function
 * @name dripDrankDrunkMoblieApp.controller:DrinkCtrl
 * @description
 * # DrinkCtrl
 * Controller of the dripDrankDrunkMoblieApp
 */
angular.module('dripDrankDrunkMoblieApp')
  .controller('DrinkCtrl', ['$scope', 'DrinkService', function ($scope, DrinkService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.hideModal = function(){
      $('.ui.modal').modal('show',false);
    };

    $scope.logDrink = function (drinkName) {
      console.log("Log a " + drinkName);
      $scope.modalTitle = "Logged a "+drinkName;
      $('.ui.modal')
        .modal('setting', 'closable', false)
        .modal('show')
        ;
      var label = "" + $scope.logLabel;
      var name = "" + drinkName;
      DrinkService.logDrink(drinkName);
      if (label.includes(name)) {
        if (label.includes("another")) {
          $scope.logLabel = "Logged " + name + " again.";
        }
        else {
          $scope.logLabel = "Logged another " + name + ".";
        }
      }
      else {
        $scope.logLabel = "Logged a " + name + ".";
      }
    };
  }]);
