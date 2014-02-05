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
                                attrs: { method: 'post', action: 'http://localhost:4000/notes'},
                                content: [
                                    {
                                        block: 'label',
                                        attrs: { for: 'title' },
                                        content: 'Я хотів би написати замітку на тему'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { name: 'title', type: 'text' }
                                    },
                                    ',',
                                    {
                                        block: 'label',
                                        attrs: { for: 'tags' },
                                        content: 'та позначити її мітками'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { name: 'tags', type: 'text' }
                                    },
                                    '.',
                                    {
                                        block: 'label',
                                        attrs: { for: 'content' },
                                        content: 'Ось, власне, повний текст замітки:'
                                    },
                                    {
                                        block: 'textarea',
                                        attrs: { name: 'content', type: 'textarea' }
                                    },
                                    {
                                        block: 'button',
                                        attrs: { name: 'delete', type: 'submit', value: 'Видалити' },
                                        mods: { color: 'red' }
                                    },
                                    {
                                        block: 'button',
                                        attrs: { name: 'share', type: 'submit', value: 'Поділитися' },
                                        mods: { color: 'yellow' }
                                    },
                                    {
                                        block: 'button',
                                        attrs: { name: 'submit', type: 'submit', value: 'Опублікувати' },
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
