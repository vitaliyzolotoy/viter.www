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
                        content: {
                            block: 'form',
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
                                }
                            ]
                        }
                    },
                    {
                        block: 'aside',
                        content: [
                            !creating && {
                                block: 'button',
                                attrs: { name: 'delete', value: 'Видалити' },
                                mods: { color: 'red', delete: 'yes' }
                            },
                            !creating && {
                                block: 'button',
                                attrs: { name: 'submit', value: 'Відредагувати' },
                                mods: { color: 'yellow', update: 'yes' }
                            },
                            creating && {
                                block: 'button',
                                attrs: { name: 'submit', value: 'Опублікувати' },
                                mods: { color: 'green', create: 'yes' }
                            }
                        ]
                    },
                    {
                        block: 'dialog',
                        js: true,
                        content: [
                            {
                                elem: 'close',
                                content: '×'
                            },
                            {
                                elem: 'window',
                                content: [
                                    {
                                        elem: 'title',
                                        content: 'Видалити'
                                    },
                                    {
                                        elem: 'content',
                                        content: 'Видалені нотатки не можуть бути відновлені'
                                    },
                                    {
                                        elem: 'actions',
                                        content: [
                                            {
                                                block: 'button',
                                                attrs: { name: 'confirm', value: 'Видалити' },
                                                mods: { color: 'green', confirm: 'yes' }
                                            },
                                            {
                                                block: 'button',
                                                attrs: { name: 'cancel', value: 'Відмінити' },
                                                mods: { cancel: 'yes' }
                                            }
                                        ]
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
