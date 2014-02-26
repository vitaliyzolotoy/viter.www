BEM.JSON.decl({name: 'postify'}, {
    onBlock: function(ctx) {
        ctx.param('js', true);
        var creating = true,
            module = ctx.param('module') || false;
            id = module && module[0].substring(9),
            input = 'notes/' + id;

        if (id) {
            creating = false;
        }
        ctx.defer(
            BEM.blocks['i-api-request']
            .get(input)
            .then(function(result) {
                var item = result.note || '';
                ctx.content([
                    creating
                    ? BEM.blocks['i-page'].setTitle('Написати | Блоґ Віталія Золотого')
                    : BEM.blocks['i-page'].setTitle('Редагувати | Блоґ Віталія Золотого'),
                    {
                        block: 'header'
                    },
                    {
                        block: 'section',
                        mods: { type: 'postify' },
                        content: [
                            {
                                block: 'form',
                                // attrs: { method: 'post', action: 'http://localhost:4000/notes/' + item._id},
                                content: [
                                    {
                                        block: 'input',
                                        attrs: {
                                            name: 'id',
                                            type: 'hidden',
                                            value: item._id
                                        }
                                    },
                                    {
                                        block: 'input',
                                        attrs: {
                                            name: 'title',
                                            type: 'text',
                                            autofocus: 'autofocus',
                                            placeholder: 'Я хотів би написати замітку на тему',
                                            value: item.title
                                        }
                                    },
                                    {
                                        block: 'textarea',
                                        attrs: {
                                            name: 'content',
                                            type: 'textarea',
                                            placeholder: 'А тут, власне, можна написати повний текст замітки…',
                                        },
                                        content: item.content
                                    },

                                    '<br><br><br><br><br><br>',

                                    // {
                                    //     block: 'label',
                                    //     attrs: { for: 'title' },
                                    //     content: creating
                                    //     ? 'Я хотів би написати замітку на тему'
                                    //     : 'Я хотів би відредагувати тему замітки на'
                                    // },
                                    // {
                                    //     block: 'input',
                                    //     attrs: { id: 'title', name: 'title', type: 'text', value: item.title }
                                    // },
                                    // ',',
                                    // {
                                    //     block: 'label',
                                    //     attrs: { for: 'tags' },
                                    //     content: creating
                                    //     ? 'та позначити її мітками'
                                    //     : 'та позначити або доповнити її мітками'
                                    // },
                                    // {
                                    //     block: 'input',
                                    //     attrs: { id: 'tags', name: 'tags', type: 'text' }
                                    // },
                                    // '.',
                                    // {
                                    //     block: 'label',
                                    //     attrs: { for: 'content' },
                                    //     content: creating
                                    //     ? 'Ось, власне, повний текст замітки:'
                                    //     : 'Ось, власне, повний текст замітки, який також можна відредагувати:'
                                    // },
                                    // {
                                    //     block: 'textarea',
                                    //     attrs: { id: 'content', name: 'content', type: 'textarea' },
                                    //     content: item.content
                                    // },
                                ]
                            }
                        ]
                    },
                    {
                        block: 'aside',
                        content: [
                            {
                                block: 'button',
                                attrs: { name: 'delete', type: 'submit', value: 'Видалити' },
                                mods: { color: 'red', delete: 'yes' }
                            },
                            {
                                block: 'button',
                                attrs: { name: 'submit', type: 'submit', value: 'Відредагувати' },
                                mods: { color: 'yellow', update: 'yes' }
                            },
                            {
                                block: 'button',
                                attrs: { name: 'submit', type: 'submit', value: 'Опублікувати' },
                                mods: { color: 'green', create: 'yes' }
                            }
                        ]
                    }
                ]);
            })
        );
    }
});
