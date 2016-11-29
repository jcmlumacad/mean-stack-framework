'use strict';

var passport = require('passport'),
    request = require('request'),
    LocalStrategy = require('passport-local').Strategy;
    // User = require('../');

module.exports = function(app) {
    passport.use(new LocalStrategy(function(username, password, done) {
        User.find({ username: username })
            .where('password').equals(password)
            .exec(function(err, user) {
                if (err) throw err;

                if (user.length == 0) {
                    return done(null, false, {
                        message: 'User not found'
                    });
                } else {
                    done(null, { id: user[0]._id, name: username });
                }
            });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
};
