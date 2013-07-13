BEM.blocks['i-router'].define(/^\/articles\/[a-z0-9]+$/, 'i-page-article');
BEM.decl({block: 'i-page-article', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this
            .setTitle('стаття')
            .out({
                block: 'article',
                module: matchers[0].substring(1)
            });
    }

});
