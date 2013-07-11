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
    .name('server.js')
    .target('target', '?.server.js')
    .useFileList('server.js')
    .builder(makeRequires)
    .createTech();
