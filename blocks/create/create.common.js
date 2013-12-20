BEM.JSON.decl({name: 'create'}, {

    onBlock: function(ctx) {
        var data = {
            module: ctx.param('module'),
            params: ctx.param('ololo')
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
                                content: 'Написати'
                            },
                            {
                                block: 'form',
                                attrs: { method: 'post', action: '/create/'},
                                content: [
                                    {
                                        block: 'label',
                                        attrs: { for: 'title' },
                                        content: 'Я хотів би написати замітку на тему'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { id: 'title', name: 'title', type: 'text' }
                                    },
                                    ',',
                                    {
                                        block: 'label',
                                        attrs: { for: 'tags' },
                                        content: 'та позначити її мітками'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { id: 'tags', name: 'tags', type: 'text' }
                                    },
                                    '.',
                                    {
                                        block: 'label',
                                        attrs: { for: 'content' },
                                        content: 'Ось, власне, повний текст замітки:'
                                    },
                                    {
                                        block: 'textarea',
                                        attrs: { id: 'content', name: 'content', type: 'textarea' }
                                    },
                                    {
                                        block: 'button',
                                        attrs: { id: 'delete', name: 'delete', type: 'submit', value: 'Видалити' },
                                        mods: { color: 'red' }
                                    },
                                    {
                                        block: 'button',
                                        attrs: { id: 'share', name: 'share', type: 'submit', value: 'Поділитися' },
                                        mods: { color: 'yellow' }
                                    },
                                    {
                                        block: 'button',
                                        attrs: { id: 'publish', name: 'submit', type: 'submit', value: 'Опублікувати' },
                                        mods: { color: 'green' }
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
        // ctx.defer
        );
    }

});
