![AMDular logo](https://raw.githubusercontent.com/hanifbbz/amdular/master/logo.png)

#Introduction

AMDular brings the best part of Angular and RequireJS together.

* Familiar for you who use AMD. Angular is complex enough so let's not add more complexity!
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

Include `amdular.js` anywhere in your project before `require.js` and `angular.js`

#Examples

In your html file add the amdular script together with require.js and angular.

```HTML
<script src="bower_components/amdular/amdular.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script data-main="your-main-file.js" src="bower_components/requirejs/require.js"></script>
```

Create your main application file (Let's call it for example `app.js`):

```javascript
AMDular.require('app.js', ['module.js'], function (app) {
    app.controller('AppCtrl', function ($scope, variable) {
        $scope.foo = variable;
    });
});
```

In this example we are defining a controller called `AppCtrl`.
In your HTML use the `ng-controller` tag to assign your controller for example to the body tag:

```HTML
...
<body ng-controller="AppCtrl">
   ...
```

Make sure that the `<script>` tag for requirejs is poiting to your file:

```HTML
<script data-main="your-main-file.js" src="bower_components/requirejs/require.js"></script>
```

Now create the module that is producing some results that we want to use in our `app.js`.
Let's call it `module.js`:

```javascript
AMDular.define('module.js', [], function (module) {
    module.constant('variable', 'bar');
});
```

This module is defining a constant that will be exported to our `app.js`.

You can see the complete example [here] (http://htmlpreview.github.com/?https://github.com/hanifbbz/amdular/blob/master/examples/01-simplest-use/index.html)

See the [examples] (https://github.com/hanifbbz/amdular/tree/master/examples) directory for more examples.

#API

Define your modules like this:

```javascript
AMDular.define('moduleName', ['dependency', 'array'], function (module) {
    //the module parameter is the result of an angular.module( , []) call
});
```

On  your main file (application file) use it like this:

```javascript
AMDular.require('moduleName', ['dependency', 'array'], function (module) {
    //the module parameter is the result of an angular.module( , []) call
    //AMDular will automatically bootstrap your project
}, optionalAppRootElement);
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