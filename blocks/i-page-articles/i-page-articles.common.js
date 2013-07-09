BEM.blocks['i-router'].define('/articles/', 'i-page-articles');
BEM.decl({block: 'i-page-articles', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this
            .setTitle('Головна | The Feature')
            .out({
                block: 'articles',
                module: 'articles'
            });
    }

});
