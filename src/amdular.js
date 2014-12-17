var AMDular = (function () {
    'use strict';

    var exports = {};

    /**
     * Defines a angular module
     * @param name {string} Angular module path (which is the name)
     * @param dependencies {string[]} Array of dependencies
     * @param definition {function} the module definition
     * @return whatever AMD define() returns
     */
    exports.define = function AMDular_define(name, dependencies, definition) {
        return define(dependencies, function () {
            definition(angular.module(name, dependencies));
        });
    };

    /**
     * Starts the main application module
     * @param name {string} Angular module path (which is the name)
     * @param dependencies {string[]} Array of dependencies
     * @param definition {function} the module definition
     * @param element {Element} the DOM element that is going to be the "ng-app" (the root of Angular application)
     * @return whatever AMD require() returns
     */
    exports.require = function AMDular_require (name, dependencies, definition, element) {
        return require(dependencies, function () {
            definition(angular.module(name, dependencies));
            angular.bootstrap(element || document, [name]);
        });
    };

    return exports;
})();