BEM.blocks['i-router'].define(/^\/([\w-]+)\/?$/, 'i-page-module-doc');
BEM.decl({block: 'i-page-module-doc', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({
            block: 'b-node-module-doc',
            name: matchers[1]
        });
    }

});
