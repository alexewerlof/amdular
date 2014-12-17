(function () {
    'use strict';

    var name = '1/abc/code.js';
    define(function () {
        angular.module(name, [])
            .constant('a', 1);
    });

})();
