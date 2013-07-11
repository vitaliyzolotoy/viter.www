function makeIncludes() {
    return Array.prototype.map.call(arguments, function (arg) {
        if (typeof arg === 'string') {
            return 'include("' + arg + '");';
        } else if (Array.isArray(arg)) {
            return makeIncludes.apply(null, arg.map(function (file) {
                return file && file.fullname;
            }));
        } else {
            return '';
        }
    }).join('\n') + '\n';
}

function makeRequires() {
    return makeIncludes.apply(null, arguments)
        .replace(/include\(/g, 'require(');
}

module.exports = require('../../node_modules/enb/lib/build-flow').create()
    .name('js')
    .target('target', '?.js')
    .useSourceFilename('templates', '?.bemhtml.js')
    .useFileList(['common.js', 'js'])
    .builder(makeIncludes)
    .createTech();
