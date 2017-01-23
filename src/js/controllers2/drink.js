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
        //on scope load
        $scope.$on('$viewContentLoaded', function () {
            //creates new modal
            $('.ui.modal').modal('setting', 'closable', true);
        });            

        $scope.hideModal = function () {
            $('.ui.modal').modal('show', false);
            $scope.modalTitle = "";
        };

        $scope.logDrink = function (drinkName) {
            $scope.modalTitle = "Logged a " + drinkName;
            $('.ui.modal').modal('show');
            DrinkService.logDrink(drinkName);
        };
    }]);
