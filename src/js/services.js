'use strict';

(function () {
    var app = angular.module('DataManager', []);
    var host = "http://23.99.27.197:5000/";
    var token;
    app.service('AuthService', ['$http', function ($http) {
        var self = this;

        self.login = function (username, password, callback) {
            var pkt = { email: username, password: password };
            $http({
                method: 'POST',
                url: host + "login",
                data: pkt,
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                }
            }).then(function (data) {
                console.log('SUCCESS - login', data.data, data.data.access_token);
                setToken('auth-token', data.data.access_token);
                $http.defaults.headers.common.Authorization = 'Bearer ' + data.data.access_token;
                token = 'Bearer ' + data.data.access_token;
                callback(data.data.access_token);
            }, function errorCallback(response) {
                console.log('error occured: ', response);
                callback('', response);
                //UPDATE STUFF FOR INCORRECT USER NAME PASSWORD VS SERVER ERROR
            });
        };
    }]);
    app.service('DrinkService', ['$http', function ($http) {
        var self = this;

        self.logDrink = function (drinkName) {
            var pkt = { drink: drinkName };
            $http({
                method: 'POST',
                url: host + "setNight",
                data: pkt,
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': token
                }
            });
        };
    }]);
    app.service('DDService', ['$http','$state', function ($http,$state) {
        var self = this;

        self.getDD = function (callback) {
            $http({
                method: 'GET',
                url: host + "needDD",
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': token
                }
            }).then(function(response){
                if(response.data.need){
                    $state.go('user.dd');
                }
                else{
                    $state.go('user.drink');
                }
            });
        };

        self.setDD = function(name, pnum){
            var pkt = {dd_name: name, dd_number:pnum};
            $http({
                method: 'POST',
                url: host + "setDD",
                data: pkt,
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                    'Authorization': token
                }
            });
        };
    }]);
})();