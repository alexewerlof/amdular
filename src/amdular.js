var AMDular = (function () {
    'use strict';

    var exports = {};

    /**
     * Defines a angular module
     * @param name {string} Angular module path (which is the name)
     * @param dependencies {string[]} Array of dependencies
     * @param definition {function} the module definition
     */
    exports.define = function AMDular_define(name, dependencies, definition) {
        define(dependencies, function () {
            definition(angular.module(name, dependencies));
        });
    };

    /**
     * Starts the main application module
     * @param name {string} Angular module path (which is the name)
     * @param dependencies {string[]} Array of dependencies
     * @param definition {function} the module definition
     * @param element {Element} the DOM element that is going to be the "ng-app" (the root of Angular application)
     */
    exports.require = function AMDular_require (name, dependencies, definition, element) {
        require(dependencies, function () {
            definition(angular.module(name, dependencies));
            angular.bootstrap(element || document, [name]);
        });
    };

    return exports;
})();