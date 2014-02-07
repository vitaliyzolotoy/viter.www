BEM.JSON.decl({name: 'note'}, {

    onBlock: function(ctx) {
        var data = {
            module: ctx.param('module')
        };

        ctx.defer(
            BEM.blocks['i-api']
            .module(data)
            .then(function(result) {
                ctx.content([
                    BEM.blocks['i-page'].setTitle(result.note.title),
                    {
                        block: 'header'
                    },
                    {
                        block: 'section',
                        content: [
                            {
                                elem: 'title',
                                tag: 'h4',
                                content: [
                                    {
                                        block: 'link',
                                        url: '/postify/' + result.note._id,
                                        content: '✎'
                                    },
                                    ' ',
                                    result.note.title
                                ]

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
        // ctx.defer
        );
    }

});
