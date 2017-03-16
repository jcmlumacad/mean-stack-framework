(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';

    angular.module('auth')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'nav': { templateUrl: 'views/auth/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/login.html'
                    }
                }
            })
            .state('register', {
                url: '/register',
                views: {
                    'nav': { templateUrl: 'views/auth/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/register.html'
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();

},{}],2:[function(require,module,exports){
(function () {
    'use strict';

    angular.module('auth')
        .controller('AuthController', AuthController);
    AuthController.$inject = ['AuthFactory'];

    function AuthController(AuthFactory) {
        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.login = login;
        vm.register = register;

        function login() {
            AuthFactory.login({ username: vm.username, password: vm.password });
        }

        function register() {
            AuthFactory.register({ username: vm.username, password: vm.password });
        }
    }
})();

},{}],3:[function(require,module,exports){
(function () {
    'use strict';

    angular.module('auth')
        .factory('AuthFactory', AuthFactory);
    AuthFactory.$inject = ['$http'];

    function AuthFactory($http) {
        return {
            login: login,
            register: register
        }

        function login(credentials) {
            $http.post('/login', credentials).then(function (res) {
                if (res.data) {
                    window.location.assign('/');
                } else {
                    alert('Invalid credentials');
                }
            });
        }

        function register(data) {
            $http.post('/register', data).then(function(res) {
                if (res.data) {
                    window.location.assign('/');
                } else {
                    alert('Username already exist');
                }
            });
        }
    }
})();

},{}],4:[function(require,module,exports){
/**
 * @author TMJP Web Development Team
 * @copyright 2016
 */

(function () {
    'use strict';

    angular.module('home')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'nav': { templateUrl: 'views/layouts/nav.html' },
                    'content': {
                        templateUrl: 'views/web/home.html',
                        controller: 'HomeController',
                        controllerAs: 'hc',
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();

},{}],5:[function(require,module,exports){
(function () {
    'use strict';

    angular.module('home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;
        activate();

        function activate() {}
    }
})();

},{}],6:[function(require,module,exports){
(function () {
    'use strict';

    angular.module('navigation')
        .directive('href', href);

    href.$inject = [];

    function href() {
        return {
            restrict: 'A',
            link: linkFunction
        }

        function linkFunction(scope, element, attr) {
            element.on('click', function () {
                window.location.href = attr.href;
            });
        }
    }
})();
},{}]},{},[1,2,3,4,5,6]);
