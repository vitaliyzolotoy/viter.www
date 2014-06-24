BEM.JSON.decl({name: 'notes'}, {
    onBlock: function(ctx) {
        var data = ctx.param('module');
        ctx.defer(
            BEM.blocks['i-api-request']
            .get(data)
            .then(function(result) {
                ctx.content([
                    BEM.blocks['i-page'].setTitle('Зміст | Руїна'),
                    {
                        block: 'header'
                    },
                    {
                        block: 'section',
                        content: [
                            {
                                block: 'title',
                                tag: 'h2',
                                content: result.notes ? 'Зміст' : 'Тут порожньо'
                            },
                            {
                                block: 'chapters'
                            },
                            {
                                block: 'toc',
                                content: result.notes && [
                                    result.notes.map(function(item) {
                                        return {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'section',
                                                    content: item.section
                                                },
                                                {
                                                    block: 'link',
                                                    url: '/notes/' + item._id,
                                                    content: item.title
                                                },
                                                {
                                                    block: 'time',
                                                    attrs: { pubdate: '', datetime: item.modified },
                                                    content: [
                                                        ' ',
                                                        (item.created < item.modified) ? 'оновлено' : 'написано',
                                                        ' ',
                                                        BEM.blocks['i-date'].beautify(item.modified)
                                                    ]
                                                }
                                            ]
                                        };
                                    }),
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            url: '/',
                                            content: 'Чільна'
                                        }
                                    }
                                ]
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
