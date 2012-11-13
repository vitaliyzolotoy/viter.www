var BEM = require('bem'),
    myPath = BEM.require('./path');

exports.techs = {
    'js': '../../bem-bl/blocks-common/i-bem/bem/techs/js.js',
    'css': 'css',
    'bemhtml': '../../bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js',
    'priv.js': '../../.bem/techs/priv.js',
};

for (var alias in exports.techs) {
    var p = exports.techs[alias];
    if (/\.{1,2}\//.test(p)) exports.techs[alias] = myPath.absolute(p, __dirname);
}

exports.defaultTechs = ['css', 'js', 'bemhtml'];

exports.isIgnorablePath = function(path) {
    return (/\.(git|svn)$/.test(path) ||
        /(GNU|MAC)?[Mm]akefile/.test(path));
};
var extend = require('bem/lib/util').extend;