'use strict';

var csrf = require('csurf'),
    csrfProtection = csrf({ cookie: true }),
    helmet = require('helmet');

module.exports = function(app) {
    app.use(csrfProtection);
    app.use(helmet());
};
