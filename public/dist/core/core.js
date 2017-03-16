(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Initializing Angular App Configuration
 * @author TMJP Engineering Team 2016
 */

(function (window) {
    'use strict';

    var moduleName = 'tmj';
    var moduleSharedDependencies = [
        // insert global shared modules here
        'ngResource',
        'ui.router'
    ];

    var config = {
        moduleName : moduleName, //
        moduleSharedDependencies: moduleSharedDependencies,
        registerModule: registerModule
    };

    window.angularAppConfig = config;

    function registerModule(moduleName, dependencies) {
        // create a new module
        angular.module(moduleName, dependencies || []);

        // Add the new module to the core module as dependencies
        angular.module(config.moduleName).requires.push(moduleName);
    }
})(window);

},{}],2:[function(require,module,exports){
/**
 * Initialize the core module and its dependencies
 * @author TMJP Engineering Team 2016
 */

(function (app) {
    'use strict';

    // start defining the module and its dependencies
    angular.module(app.moduleName, app.moduleSharedDependencies);

    // wait for the document to load before initializing app
    angular.element(document).ready(init);

    // initialize the app
    function init() {
        var config = {
            'element': document,
            'module': app.moduleName,
            'moduleResolves': [
                {
                    // bind the resolve in core modules
                    'module': 'core',
                    'resolve': {}
                }
            ]
        };
        deferredBootstrapper.bootstrap(config);
    }
})(angularAppConfig);

},{}],3:[function(require,module,exports){
/**
 * Adding a configuration before the angular initialized
 * @author TMJP Engineering Team 2016
 */

(function (window) {
    'use strict';

    var resolve = {
        CORE_CONFIG: coreConfig
    };

    coreConfig.$inject = ['$http'];

    function coreConfig($http) {
        return $http.get('config').then(function (response) {
            // return response;
        }, function (err) {
            return err;
        });
    }

    window.angularAppConfig.resolve = resolve;
}(window));

},{}]},{},[1,2,3]);
