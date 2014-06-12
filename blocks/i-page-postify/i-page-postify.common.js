BEM.blocks['i-router'].define(/^\/postify\/?[a-z0-9]*$/, 'i-page-postify');

BEM.decl({block: 'i-page-postify', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .setMeta('viewport', 'width=device-width, initial-scale=1')
            .out({
                block: 'postify',
                module: matchers
            });
    }
});
