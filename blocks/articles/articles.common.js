BEM.JSON.decl({name: 'articles'}, {

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
                                content: 'Список статтей'
                            },
                            {
                                elem: 'toc',
                                tag: 'ul',
                                content: result.articles.map(function(item) {
                                    return [
                                        {
                                            tag: 'li',
                                            content: [
                                                {
                                                    block: 'link',
                                                    content: item.title,
                                                    url: '/articles/' + item._id
                                                },
                                                ' ',
                                                {
                                                    block: 'time',
                                                    attrs: { pubdate: '', datetime: item.modified },
                                                    content: BEM.blocks['i-date'].beautify(item.modified)
                                                }
                                            ]
                                        }
                                    ]
                                })
                            }
                        ]
                    },
                    {
                        block: 'aside',
                        content: [
                            {
                                block: 'link',
                                url: '/create/',
                                content: 'Нова стаття'
                            }
                        ]
                    }
                ]);
            })
        // ctx.defer
        );
    }

});
