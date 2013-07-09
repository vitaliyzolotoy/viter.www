BEM.blocks['i-router'].define('/create/', 'i-page-create');
BEM.decl({block: 'i-page-create', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        var ololo = BEM.blocks['i-router'].get('params');
        return this
            .setTitle('Написати | The Feature')
            .out({
                block: 'create',
                module: 'articles/new',
                ololo: ololo
            });
    }

});
