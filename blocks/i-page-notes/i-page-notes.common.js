BEM.blocks['i-router'].define(/^\/notes\/?$/, 'i-page-notes');

BEM.decl({block: 'i-page-notes', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .setTitle('Зміст | Блоґ Віталія Золотого')
            .out({
                block: 'notes',
                module: 'notes'
            });
    }
});
