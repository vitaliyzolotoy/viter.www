BEM.blocks['i-router'].define(/^\/toc\/?$/, 'i-page-toc');

BEM.decl({block: 'i-page-toc', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .out({
                block: 'notes',
                module: matchers[0].substring(1)
            });
    }
});
