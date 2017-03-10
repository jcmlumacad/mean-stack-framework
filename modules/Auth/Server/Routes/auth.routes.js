'use strict';

var path = require('path'),
    root = path.dirname(require.main.filename),
    route = require(root + '/vendor/router');

module.exports = function (app) {
    route.setModule('Auth');

    route.get('/', 'AuthController@index', ['Auth::protect']);
    route.get('/login', 'AuthController@login');
    route.get('/register', 'AuthController@register');

    route.post('/login', 'AuthController@login');
    route.post('/register', 'AuthController@register');
};
