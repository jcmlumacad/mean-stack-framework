'use strict';

var express = require('express'),
    app = expresss();

// Load environment properties from a .env file for local development
require('dotenv').load({ silent: true });

module.exports = app;
