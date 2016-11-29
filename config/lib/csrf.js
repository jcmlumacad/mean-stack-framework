'use strict';

module.exports = function(app) {
    /* We use csurf for csrfProtection */
    app.use(function(req, res, next) {
        res.cookie('CSRF-TOKEN', req.csrfToken());
        next();
    });
};
