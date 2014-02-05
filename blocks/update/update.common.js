BEM.JSON.decl({name: 'update'}, {

    onBlock: function(ctx) {
        var data = {
            module: ctx.param('module')
        };

        console.log(data);

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
                                        block: 'input',
                                        attrs: { name: 'id', type: 'hidden', value: result.note._id}
                                    },
                                    {
                                        block: 'label',
                                        attrs: { for: 'title' },
                                        content: 'Я хотів би відредагувати тему замітки на'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { name: 'title', type: 'text', value: result.note.title }
                                    },
                                    ',',
                                    {
                                        block: 'label',
                                        attrs: { for: 'tags' },
                                        content: 'та позначити або доповнити її мітками'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { name: 'tags', type: 'text' }
                                    },
                                    '.',
                                    {
                                        block: 'label',
                                        attrs: { for: 'content' },
                                        content: 'Ось, власне, повний текст замітки, який також можна відредагувати:'
                                    },
                                    {
                                        block: 'textarea',
                                        attrs: { name: 'content', type: 'textarea' },
                                        content: result.note.content
                                    },
                                    {
                                        block: 'button',
                                        attrs: { name: 'delete', type: 'submit', value: 'Видалити' },
                                        mods: { color: 'red' }
                                    },
                                    {
                                        block: 'button',
                                        attrs: { name: 'submit', type: 'submit', value: 'Зберегти' },
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
