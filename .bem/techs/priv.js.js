var BEM = require('bem'),
    PATH = require('path'),
    INHERIT = BEM.require('inherit'),

    /** @class */
    Tech = BEM.require('./techs/css').Tech;

exports.Tech = INHERIT(Tech, /** @lends Tech.prototype */ {

    getBuildResult: function(prefixes, suffix, outputDir, outputName) {

        return this.__base(prefixes, suffix, outputDir, outputName).then(function(res) {

            var bemhtml = PATH.join(
                PATH.relative(
                    PATH.resolve(__dirname, ''),
                    PATH.resolve(outputDir)),
                '' + outputName + '.bemhtml.js');

            // res.unshift('var BEMHTML = require("./' + bemhtml + '").BEMHTML;\n');
            res.unshift('/* borschik:include:' + outputName + '.bemhtml.js */\n');
            return res;

        });

    },

    getBuildResultChunk: function(relPath, path, suffix) {

        return '/* borschik:include:' + relPath + ' */\n';

    }

});
