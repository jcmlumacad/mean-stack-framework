(function () {
    'use strict';

    angular.module('auth')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'nav': { templateUrl: 'views/auth/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/login.html',
                        controller: 'AuthController',
                        controllerAs: 'ac',
                    }
                }
            })
            .state('register', {
                url: '/register',
                views: {
                    'nav': { templateUrl: 'views/auth/nav.html' },
                    'content': {
                        templateUrl: 'views/auth/register.html',
                        controller: 'AuthController',
                        controllerAs: 'ac',
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();
