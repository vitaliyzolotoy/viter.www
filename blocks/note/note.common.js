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
                            {
                                block: 'status',
                                js: {
                                    created: result.note.created,
                                    modified: result.note.modified,
                                    published: result.note.published
                                }
                            },
                            BEM.blocks['i-vk'].isAuth() && result.note && {
                                block: 'edit',
                                content: {
                                    block: 'link',
                                    url: '/editor/' + result.note._id,
                                    content: 'редагувати'
                                }
                            },
                            result.note && {
                                block: 'text',
                                content: result.note.content
                            }
                        ]
                    },
                    result.note && {
                        block: 'aside',
                        content: [
                            // {
                            //     block: 'chapter',
                            //     js: {
                            //         id: result.note.chapter
                            //     }
                            // },
                            {
                                block: 'nextprev',
                                js: {
                                    id: result.note._id
                                }
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
