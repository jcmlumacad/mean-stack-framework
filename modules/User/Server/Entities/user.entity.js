'use strict';

var User = require('./../Schemas/user.schema'),
    crypto = require('crypto');

module.exports = {
    save: function (params) {
        var user = new User(params);
        user.save(function (err) {
            if (err) throw err;
        });
    },
    updateByEmail: function (email, password) {
        User.findOne({ email: email }, function (err, user) {
            if (err) throw err;
            user.password = password;
            user.save(function (err) {
                if (err) throw err;
            });
        });
    }
};
