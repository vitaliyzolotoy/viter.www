//@see https://github.com/enb-make/enb
module.exports = require('../node_modules/bem-node/enb-make')
    .pages('pages/*')
    .levels(['blocks'])
    .freeze();
