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
                            result.note
                            ? {
                                block: 'title',
                                tag: 'h2',
                                content: [
                                    {
                                        tag: 'span',
                                        content: result.note.section
                                    },
                                    ' ',
                                    result.note.title
                                ]
                            }
                            : {
                                block: 'title',
                                tag: 'h2',
                                content: 'Тут порожньо'
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
                                    url: '/editor/' + result.note._id,
                                    content: 'редагувати'
                                }
                            },
                            result.note && {
                                elem: 'content',
                                mix: { block: 'text' },
                                content: result.note.content
                            },
                        ]
                    },
                    result.note && {
                        block: 'aside',
                        content: [
                            {
                                block: 'chapter',
                                id: result.note.chapter
                            },
                            {
                                block: 'nextprev',
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
