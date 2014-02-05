BEM.JSON.decl({name: 'notes'}, {

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
                                content: result.notes ? 'Список записів' : 'Немає записів'
                            },
                            result.notes && {
                                elem: 'toc',
                                tag: 'ul',
                                content: result.notes.map(function(item) {
                                    return [
                                        {
                                            tag: 'li',
                                            content: [
                                                {
                                                    block: 'link',
                                                    content: item.title,
                                                    url: '/notes/' + item._id
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
