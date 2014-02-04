BEM.blocks['i-router'].define(/^\/create\/?$/, 'i-page-create');
BEM.decl({block: 'i-page-create', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this
            .setTitle('Написати | Блоґ Віталія Золотого')
            .out({
                block: 'create',
                module: 'notes'
            });
    }

});
