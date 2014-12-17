ngRequire('code.js', ['1/code.js', '1/2/code.js', '1/abc/code.js'], function (module) {
    module.controller('AppCtrl', ['$scope', 'a', 'b', 'c', AppCtrl])

    function AppCtrl ($scope, a, b, c) {
        $scope.a = a;
        $scope.b = b;
        $scope.c = c;
    }
});