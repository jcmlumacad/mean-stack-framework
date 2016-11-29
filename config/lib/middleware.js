'use strict';

var csrf = require('csurf'),
    cookieParser = require('cookie-parser'),
    csrfProtection = csrf({ cookie: true }),
    helmet = require('helmet'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app) {
    app.use(cookieParser(Math.random().toString(36).substring(7)));
    app.use(csrfProtection);
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
};
