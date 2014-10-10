BEM.JSON.decl({name: 'entrance'}, {
    onBlock: function(ctx) {
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('notes')
            .then(function(result) {
                var notes = result.notes,
                    introduction = notes[notes.length - 1],
                    latest = notes[0];
                ctx.content([
                    {
                        elem: 'title',
                        content: 'Записки українського самашедшого'
                    },
                    {
                        elem: 'links',
                        content: [
                            {
                                elem: 'item',
                                content: {
                                    block: 'link',
                                    url: '/notes/' + introduction._id,
                                    content: 'Прочитати вступ'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'link',
                                    url: '/toc/',
                                    content: 'Оглянути зміст'
                                }
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        elem: 'latest',
                                        content: 'Поповнення:'
                                    },
                                    {
                                        block: 'link',
                                        url: '/notes/' + latest._id,
                                        content: latest.title
                                    }
                                ]
                            }
                        ]
                    }
                ]);
            })
        );
    }
});
