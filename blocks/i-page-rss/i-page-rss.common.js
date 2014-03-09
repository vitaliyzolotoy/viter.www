BEM.blocks['i-router'].define(/^\/rss\/?$/, 'i-page-rss');

BEM.decl({block: 'i-page-rss', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .out({
                block: 'rss',
                module: matchers
            });
    }
});
