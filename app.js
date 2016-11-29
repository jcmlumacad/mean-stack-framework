'use strict';

var express = require('express'),
    app = expresss();

// Load environment properties from a .env file for local development
require('dotenv').load({ silent: true });

// Views
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/modules', express.static(__dirname + '/public/modules'));
app.use('/views', express.static(__dirname + '/resources/views'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

require('./config/lib/middleware')(app);
require('./config/lib/csrf')(app);
require('./config/lib/handler')(app);

module.exports = app;
