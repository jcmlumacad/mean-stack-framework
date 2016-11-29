'use strict';

module.exports = function(file, method, module) {
    return require("../modules/" + module + '/' + file)(method);
};
