AMDular.require('app.js', ['module.js'], function (app) {
    app.controller('AppCtrl', function ($scope, variable) {
        $scope.foo = variable;
    });
});