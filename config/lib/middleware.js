'use strict';

var csrf = require('csurf'),
    csrfProtection = csrf({ cookie: true });

module.exports = function(app) {
    app.use(csrfProtection);
};
