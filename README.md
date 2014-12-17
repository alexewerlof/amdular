![AMDular logo](https://raw.githubusercontent.com/hanifbbz/amdular/master/logo.png)

#Introduction

AMDular brings the best part of Angular and RequireJS together.

* Familiar for you who use AMD
* Gives you the possibility to load Angular modules when you need them (just like how Angular itself loads templates)
* Dramatically reduce the number of `<script>` tags in your project
* No need for an additional compilation step (e.g. `Browserify`)
* Load Angular code from CDN
* The ability to use your currently existing AMD code
* Compatible with RequireJS configurations.
* Compatible with r.js and other minification tools
* Very small memory and load footprint

##What's the catch?

By convention module name is the file name (there's a way around that, see **How does it work** below)

#Install

```shell
bower install amdular
```

#Examples

#API

Define your modules like this:

```javascript
AMDular.define(moduleName, dependencyArray, function (module) {
    //the module parameter is the result of an angular.module( , []) call
});
```

On  your main file (application file) use it like this:

```javascript
AMDular.require(moduleName, dependencyArray, function (module) {
    //the module parameter is the result of an angular.module( , []) call
    //AMDular will automatically bootstrap your project
});
```

#How does it work?

The idea is simple. Angular has a dependency injection system and AMD is has a module loading system.
Both are quite similar in a big-picture kinda view but the details differ a lot.
However they are too good not to be used together.
There has been many efforts to marry these two together but the solutions are either bloated or hard to use.

> Everything should be made as simple as possible but not simpler --Albert Einstein

So with a little convention we can benefit from Angular's dependency injection together with AMD.

The convention is to use the file name as the Angular AMD module names.
For those of you who don't like this solution, requireJS shims solve the problem.