var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/');


exports.getTechs = function() {

    return {
        'bemjson.js'    : pjoin(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'js'            : 'js-i',
        'css'           : 'css',

        'bemhtml'       : pjoin(PRJ_ROOT, 'bemhtml/.bem/techs/bemhtml.js'),
        'html'          : pjoin(PRJ_ROOT, 'bemhtml/.bem/techs/bemjson2html.js'),

        'ctrl.js'       : pjoin(PRJ_TECHS, 'ctrl.js'),
        'mdl.js'        : pjoin(PRJ_TECHS, 'mdl.js'),
        'priv.js'       : pjoin(PRJ_TECHS, 'priv.js')
    };

};


// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
