'use strict';

var fs = require('fs'),
    path = require('path'),
    route = require('../../vendor/router');

module.exports = function(app) {
    /* Load All Routes */
    route.setApp(app);

    function recursiveRoutes(folderName) {
        fs.readdirSync(folderName).forEach(function (file) {
            var pathName = path.join(folderName, file);
            var stat = fs.lstatSync(pathName);

            if (stat.isDirectory()) {
                recursiveRoutes(pathName);
            } else if (file.indexOf('.routes') >= 0) {
                var name = pathName.replace('.js', '').replace(/\\/g, '/');
                require('./../../' + name)(app);
            }
        });
    }

    recursiveRoutes('modules');

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    app.all('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../resources/views', 'index.html'));
    });
};
