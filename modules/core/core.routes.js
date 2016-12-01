'use strict';

var path = require('path'),
    middleware = require('./core.middleware');

module.exports = function(app) {
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    app.all('/*', middleware('auth'), function(req, res) {
        res.sendFile(path.join(__dirname, '../../resources/views', 'index.html'));
    });
};
