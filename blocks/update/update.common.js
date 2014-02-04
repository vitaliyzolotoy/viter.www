BEM.JSON.decl({name: 'update'}, {

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
                                content: 'Написати'
                            },
                            {
                                block: 'form',
                                attrs: { method: 'post', action: 'http://localhost:4000/notes/' + result.note._id},
                                content: [
                                    {
                                        block: 'label',
                                        attrs: { for: 'title' },
                                        content: 'Я хотів би відредагувати тему замітки на'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { id: 'title', name: 'title', type: 'text', value: result.note.title }
                                    },
                                    ',',
                                    {
                                        block: 'label',
                                        attrs: { for: 'tags' },
                                        content: 'та позначити або доповнити її мітками'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { id: 'tags', name: 'tags', type: 'text' }
                                    },
                                    '.',
                                    {
                                        block: 'label',
                                        attrs: { for: 'content' },
                                        content: 'Ось, власне, повний текст замітки, який також можна відредагувати:'
                                    },
                                    {
                                        block: 'textarea',
                                        attrs: { id: 'content', name: 'content', type: 'textarea' },
                                        content: result.note.content
                                    },
                                    {
                                        block: 'button',
                                        attrs: { id: 'publish', name: 'submit', type: 'submit', value: 'Зберегти' },
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
