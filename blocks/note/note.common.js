BEM.JSON.decl({name: 'note'}, {
    onBlock: function(ctx) {
        var data = ctx.param('module');
        ctx.defer(
            BEM.blocks['i-api-request']
            .get(data)
            .then(function(result) {
                ctx.content([
                    result.note && BEM.blocks['i-page'].setTitle(result.note.title + ' | Руїна'),
                    {
                        block: 'header'
                    },
                    {
                        block: 'section',
                        content: [
                            {
                                block: 'title',
                                tag: 'h2',
                                content: result.note ? result.note.title : 'Тут порожньо'
                            },
                            result.note && {
                                block: 'time',
                                attrs: { pubdate: '', datetime: result.note.modified },
                                content: [
                                    ' ',
                                    (result.note.created < result.note.modified) ? 'оновлено' : 'написано',
                                    ' ',
                                    BEM.blocks['i-date'].beautify(result.note.modified)
                                ]
                            },
                            BEM.blocks['i-auth'].check() && result.note && {
                                block: 'modify',
                                content: {
                                    block: 'link',
                                    url: '/postify/' + result.note._id,
                                    content: 'редагувати'
                                }
                            },
                            result.note && {
                                elem: 'content',
                                mix: { block: 'text' },
                                content: result.note.content
                            },
                            // {
                            //     block: 'tags',
                            //     id: result.note._id
                            // }
                        ]
                    },
                    result.note && {
                        block: 'aside',
                        content: {
                            block: 'nextprev',
                            id: result.note._id
                        }
                    },
                    {
                        block: 'footer'
                    }
                ]);
            })
        );
    }
});
