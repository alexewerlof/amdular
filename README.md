![AMDular logo](https://raw.githubusercontent.com/hanifbbz/amdular/master/AMDular-logo.png)

#Introduction

AMDular brings the best part of Angular and RequireJS together.

#Install

````
bower install amdular
````

#Use

Define your modules like this:

````
ngDefine(moduleName, dependencyArray, function (module) {
    //the module parameter is the result of an angular.module( , []) call
});
````

On  your main file (application file) use it like this:

````
ngDefine(moduleName, dependencyArray, function (module) {
    //the module parameter is the result of an angular.module( , []) call
    //AMDular will automatically bootstrap your project
});
````