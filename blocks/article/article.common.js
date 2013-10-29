BEM.JSON.decl({name: 'article'}, {

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
                        block: 'section',
                        content: [
                            {
                                elem: 'title',
                                tag: 'h4',
                                content: result.article.title
                            },
                            {
                                block: 'time',
                                attrs: { pubdate: '', datetime: result.article.modified },
                                content: BEM.blocks['i-date'].beautify(result.article.modified)
                            },
                            {
                                elem: 'content',
                                content: result.article.content
                            }
                        ]
                    }
                ]);
            })
        // ctx.defer
        );
    }

});
