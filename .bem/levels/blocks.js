var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/'),
    BEMBL_TECHS = pjoin(PRJ_ROOT, 'bem-bl/blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return {
        'js'            : pjoin(BEMBL_TECHS, 'js.js'),
        'css'           : 'css',

        'bemhtml'       : pjoin(BEMBL_TECHS, 'bemhtml.js')

    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
