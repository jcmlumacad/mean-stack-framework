(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Bootstrapper in Angular
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular
        .module('core')
        .config(bootstrapConfig);

    bootstrapConfig.$inject = ['$httpProvider'];

    function bootstrapConfig($httpProvider) {
        $httpProvider.interceptors.push('errorInterceptor');
    }
})();

},{}],2:[function(require,module,exports){
/**
 * Default Core Message Constants
 * Can be overriden if neccessary by deferedBoostrapper
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular
        .module('core')
        .constant('CORE_MSG', coreMsg());

    function coreMsg() {
        return  {
            'ERR_PERMISSION' : 'Sorry, you have no permission.',
            'ERR_UNKNOWN' : 'Unknown error occured.',
        };
    }
})();

},{}],3:[function(require,module,exports){
/**
 * Core Run in Angular
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular.module('core')
        .run(coreRun);
    coreRun.$inject = ['ResponseErrorEvent'];

    function coreRun(ResponseErrorEvent) {
        // Listener for response error event
        ResponseErrorEvent.listen(function(event, errorMessage) {
            // Handle errors
            alert(errorMessage);
        });
    }
})();

},{}],4:[function(require,module,exports){
/**
 * Error Interceptor in Angular
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular.module('core')
        .factory('errorInterceptor', errorInterceptor);
    errorInterceptor.$inject = ['$q', '$log', 'ResponseErrorEvent', 'CORE_MSG'];

    function errorInterceptor($q, $log, ResponseErrorEvent, CORE_MSG) {
        var interceptor = {
            response: response,
            responseError: responseError
        };

        return interceptor;

        function response(response) {
            var data = response.data;

            if (data && data.error) {
                var errorMessage = buildErrorMessage(data.error);

                // Fire the response error event
                ResponseErrorEvent.fire(errorMessage);
                return $q.reject(errorMessage);
            }

            return response;
        }

        function responseError(response) {
            var errorMessage = buildErrorMessage(response.data);

            switch (response.status) {
                case 500:
                    $log.error('Server Error:', response);
                    break;
                default:
                    errorMessage = CORE_MSG.ERR_PERMISSION;
                    break;
            }

            // Fire the response error event
            ResponseErrorEvent.fire(errorMessage);
            return $q.reject(errorMessage);
        }

        function buildErrorMessage(errors) {
            // This is for catching errors returned by Laravel validations
            if (angular.isArray(errors) || angular.isObject(errors)) {
                var message = '';

                for (var field in errors) {
                    message += errors[field];
                    message += '<br>';
                }

                return message;
            } else if (angular.isString(errors)) {
                return errors;
            } else {
                return CORE_MSG.ERR_UNKNOWN;
            }
        }
    }
})();

},{}],5:[function(require,module,exports){
/**
 * Response Error Event Handler in Angular
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular
        .module('core')
        .factory('ResponseErrorEvent', ResponseErrorEvent);
    ResponseErrorEvent.$inject = ['$rootScope'];

    /* @ngInject */
    function ResponseErrorEvent($rootScope) {
        var eventName = 'response-error',
            service = {
                fire: fire,
                listen: listen
            };

        return service;

        function fire(data) {
            $rootScope.$emit(eventName, data);
        }

        function listen(callback) {
            var deregister = $rootScope.$on(eventName, listener);

            function listener() {
                if (callback) {
                    callback.apply($rootScope, arguments);
                }
            }

            return deregister;
        }
    }
})();

},{}]},{},[1,2,3,4,5]);
