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

        $scope.hideModal = function () {
            $('.ui.modal').modal('show', false);
        };

        $scope.logDrink = function (drinkName) {
            $scope.modalTitle = "Logged a " + drinkName;
            $('.ui.modal')
                .modal('setting', 'closable', true)
                .modal('show');
        };
    }]);
