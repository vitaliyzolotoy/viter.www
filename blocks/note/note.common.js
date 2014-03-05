BEM.JSON.decl({name: 'note'}, {
    onBlock: function(ctx) {
        var data = ctx.param('module');
        ctx.defer(
            BEM.blocks['i-api-request']
            .get(data)
            .then(function(result) {
                ctx.content([
                    BEM.blocks['i-page'].setTitle(result.note.title + ' | Блоґ Віталія Золотого'),
                    {
                        block: 'header'
                    },
                    {
                        block: 'section',
                        content: [
                            {
                                block: 'title',
                                tag: 'h2',
                                content: result.note.title
                            },
                            {
                                block: 'time',
                                attrs: { pubdate: '', datetime: result.note.modified },
                                content: [
                                    ' ',
                                    (result.note.created < result.note.modified) ? 'оновлено' : 'написано',
                                    ' ',
                                    BEM.blocks['i-date'].beautify(result.note.modified)
                                ]
                            },
                            {
                                block: 'modify',
                                content: {
                                    block: 'link',
                                    url: '/postify/' + result.note._id,
                                    content: 'редагувати'
                                }
                            },
                            {
                                elem: 'content',
                                mix: { block: 'text' },
                                content: result.note.content
                            },
                            {
                                block: 'tags',
                                id: result.note._id
                            }
                        ]
                    },
                    {
                        block: 'footer'
                    }
                ]);
            })
        );
    }
});
