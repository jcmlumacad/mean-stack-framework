'use strict';

var express = require('express'),
    app = expresss();

// Load environment properties from a .env file for local development
require('dotenv').load({ silent: true });

// Views
app.use('/public', express.static(__dirname + '/public'));

module.exports = app;
