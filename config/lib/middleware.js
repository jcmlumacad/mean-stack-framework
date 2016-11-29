'use strict';

var csrf = require('csurf'),
    csrfProtection = csrf({ cookie: true }),
    helmet = require('helmet'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app) {
    app.use(csrfProtection);
    app.use(helmet());
    app.use(session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
};
