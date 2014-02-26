BEM.blocks['i-router'].define(/^\/postify[\/a-z0-9]+$/, 'i-page-postify');
BEM.decl({block: 'i-page-postify', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this
            .out({
                block: 'postify',
                module: matchers
            });
    }

});
