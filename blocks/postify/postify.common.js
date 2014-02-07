BEM.JSON.decl({name: 'postify'}, {
    onBlock: function(ctx) {
        var creating = true,
            module = ctx.param('module') || false;
            id = module && module[0].substring(9),
            input = 'notes/' + id;

        if (id) {
            creating = false;
        }
        ctx.defer(
            BEM.blocks['i-api']
            .get(input)
            .then(function(result) {
                var item = result.note || '';
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
                                content: creating
                                ? 'Написати'
                                : 'Змінити'
                            },
                            {
                                block: 'form',
                                // attrs: { method: 'post', action: 'http://localhost:4000/notes/' + item._id},
                                js: true,
                                content: [
                                    {
                                        block: 'input',
                                        attrs: { name: 'id', type: 'hidden', value: item._id}
                                    },
                                    {
                                        block: 'label',
                                        attrs: { for: 'title' },
                                        content: creating
                                        ? 'Я хотів би написати замітку на тему'
                                        : 'Я хотів би відредагувати тему замітки на'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { id: 'title', name: 'title', type: 'text', value: item.title }
                                    },
                                    ',',
                                    {
                                        block: 'label',
                                        attrs: { for: 'tags' },
                                        content: creating
                                        ? 'та позначити її мітками'
                                        : 'та позначити або доповнити її мітками'
                                    },
                                    {
                                        block: 'input',
                                        attrs: { id: 'tags', name: 'tags', type: 'text' }
                                    },
                                    '.',
                                    {
                                        block: 'label',
                                        attrs: { for: 'content' },
                                        content: creating
                                        ? 'Ось, власне, повний текст замітки:'
                                        : 'Ось, власне, повний текст замітки, який також можна відредагувати:'
                                    },
                                    {
                                        block: 'textarea',
                                        attrs: { id: 'content', name: 'content', type: 'textarea' },
                                        content: item.content
                                    },
                                    !creating && {
                                        block: 'button',
                                        attrs: { name: 'delete', type: 'submit', value: 'Видалити' },
                                        mods: { color: 'red', delete: 'yes' }
                                    },
                                    !creating && {
                                        block: 'button',
                                        attrs: { name: 'submit', type: 'submit', value: 'Відредагувати' },
                                        mods: { color: 'yellow', update: 'yes' }
                                    },
                                    creating && {
                                        block: 'button',
                                        attrs: { name: 'submit', type: 'submit', value: 'Опублікувати' },
                                        mods: { color: 'green', create: 'yes' }
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
        );
    }
});
