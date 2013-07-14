module.exports = require('../../node_modules/enb/lib/build-flow').create()
    .name('js')
    .target('target', '?.js')
    .useSourceFilename('templates', '?.bemhtml.js')
    .useFileList(['common.js', 'js'])
    .justJoinFilesWithComments()
    .createTech();
