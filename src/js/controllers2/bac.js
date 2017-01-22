'use strict';


angular.module('dripDrankDrunkMoblieApp')
    .controller('BacCtrl', ['$scope', '$http', 'DrinkService', 'DataService', function ($scope, $http, DrinkService,DataService) {
            $scope.bodyFactor = null;;
            $scope.drinks = null;
            $scope.bac = 0.0;

        DrinkService.getDrinks(function(data, err){
            if(err) {
                return;
            }
            $scope.drinks = data.map(function(drink){
                drink.time = moment(drink.drinkTime);
                return drink;
            });
            $scope.drinks.sort(function (a, b) {
                if (a.time < b.time) {
                    return -1;
                }
                else if (a.time === b.time) {
                    return 0;
                } else {
                    return 1;
                }
            });
            finishBac();

        });

        DataService.getBio(function(data){
            $scope.bodyFactor = (data.sex === 'male' ? 0.68 : 0.55) * data.weight * 454;
            //next step
            finishBac();
        });

        var finishBac = function(){
            if($scope.bodyFactor && $scope.drinks){
                generateBAC($scope.drinks);
            }else{
                return;
            }
        };

        var generateBAC = function (drinks) {
            var residualBAC = 0.0;
            var pastTime = drinks[0].time;
            var data = [];
            for (var i = 0; i < drinks.length; i++) {
                //calcuate bac for this point
                var bac = 14 / $scope.bodyFactor * 100;
                //Account for residualBAC
                var timeOffset = drinks[i].time.diff(pastTime, 'hours', true);
                bac += Math.max(0, residualBAC - (timeOffset * 0.015));
                residualBAC = bac;
                pastTime = drinks[i].time;
            }
            publishNewBac(bac);
        };

        var publishNewBac = function(bac){
            $scope.bac = bac.toFixed(3);
            if(bac > 0.07){
                alertWingman();
            }
        };

        var alertWingman = function(bac){
            DrinkService.alertWingMan(bac);
        };

    }]);
