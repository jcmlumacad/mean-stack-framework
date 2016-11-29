'use strict';

var csrf = require('csurf'),
    csrfProtection = csrf({ cookie: true }),
    helmet = require('helmet'),
    passport = require('passport');

module.exports = function(app) {
    app.use(csrfProtection);
    app.use(helmet());
    app.use(passport.initialize());
    app.use(passport.session());
};
