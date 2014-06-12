BEM.blocks['i-router'].define(/^\/notes\/[a-z0-9]+$/, 'i-page-note');

BEM.decl({block: 'i-page-note', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .setMeta('viewport', 'width=device-width, initial-scale=1')
            .out({
                block: 'note',
                module: matchers[0].substring(1)
            });
    }
});
