var BEM = require('bem'),
    PATH = require('path'),
    INHERIT = BEM.require('inherit'),
    Tech = BEM.require('./techs/css').Tech;

exports.Tech = INHERIT(Tech, {

    getBuildResultChunk: function(relPath, path, suffix) {
        return '/*borschik:include:' + relPath + '*/;\n';
    },

    getSuffixes: function() {
        return ['ctrl.js'];
    }

});
