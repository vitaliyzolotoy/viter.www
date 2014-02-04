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
                                    result.note.title,
                                    ' ',
                                    {
                                        block: 'link',
                                        url: '/update/' + result.note._id,
                                        content: '✎'
                                    }
                                ]

                            },
                            {
                                block: 'time',
                                attrs: { pubdate: '', datetime: result.note.modified },
                                content: BEM.blocks['i-date'].beautify(result.note.modified)
                            },
                            {
                                elem: 'content',
                                mix: { block: 'text' },
                                content: result.note.content
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
