BEM.blocks['i-router'].define(/^\/editor\/?[a-z0-9]*$/, 'i-page-editor');

BEM.decl({block: 'i-page-editor', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .out({
                block: 'editor',
                module: matchers
            });
    }
});
