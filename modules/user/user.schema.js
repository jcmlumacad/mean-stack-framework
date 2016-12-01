'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,

    userSchema = new Mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true,
            select: false
        }
    });

module.exports = Mongoose.model('User', userSchema);
