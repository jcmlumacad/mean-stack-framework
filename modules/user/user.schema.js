'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,

    userSchema = new Mongoose.Schema({});

module.exports = Mongoose.model('User', userSchema);
