BEM.blocks['i-router'].define(/^\/update\/[a-z0-9]+$/, 'i-page-update');
BEM.decl({block: 'i-page-update', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this
            .setTitle('Відредагувати | Блоґ Віталія Золотого')
            .out({
                block: 'update',
                module: 'notes/' + matchers[0].substring(8)
            });
    }

});
