BEM.blocks['i-router'].define(/^\/notes\/?$/, 'i-page-notes');

BEM.decl({block: 'i-page-notes', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .setMeta('viewport', 'width=device-width, initial-scale=1')
            .out({
                block: 'notes',
                module: matchers[0].substring(1)
            });
    }
});
