//@see https://github.com/enb-make/enb
module.exports = require('../node_modules/bem-node/enb-make')
    .freeze()
    .pages('pages/*')
    .levels(['blocks']);
