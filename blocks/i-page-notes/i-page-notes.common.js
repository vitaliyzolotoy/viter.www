BEM.blocks['i-router'].define(/^\/notes\/?$/, 'i-page-notes');

BEM.decl({block: 'i-page-notes', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .out({
                block: 'notes',
                module: matchers[0].substring(1)
            });
    }
});
