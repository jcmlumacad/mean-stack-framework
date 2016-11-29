(function() {

    angular.module('tmj')
        .config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: '/',
                data: { requireLogin: false },
                views: {
                    'header': { templateUrl: 'views/layouts/header.html' },
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
