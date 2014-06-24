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

        creating
        ? BEM.blocks['i-page'].setTitle('Написати | Руїна')
        : BEM.blocks['i-page'].setTitle('Редагувати | Руїна'),

        ctx.defer(
            BEM.blocks['i-api-request']
            .get(input)
            .then(function(result) {
                var item = result.note || '';
                ctx.content([
                    {
                        block: 'header',
                    },
                    !BEM.blocks['i-auth'].check() && [
                        {
                            block: 'section',
                            content: [
                                {
                                    block: 'title',
                                    tag: 'h2',
                                    content: 'Ви не авторизовані'
                                }
                            ]
                        }
                    ],
                    BEM.blocks['i-auth'].check() && [
                        {
                            block: 'section',
                            content: [
                                {
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
                                        },
                                        {
                                            block: 'chapter-create',
                                            content: [
                                                'Виберіть розділ ',
                                                {
                                                    block: 'chapters',
                                                    mods: { view: 'select', data: 'chapter-select' },
                                                    attrs: {
                                                        name: 'chapter-select'
                                                    }
                                                },
                                                ' або створіть ',
                                                {
                                                    block: 'input',
                                                    mods: { data: 'chapter-new' },
                                                    attrs: {
                                                        name: 'chapter-new',
                                                        type: 'text',
                                                        placeholder: 'новий',
                                                    }
                                                },
                                                {
                                                    block: 'input',
                                                    attrs: {
                                                        name: 'chapter',
                                                        type: 'hidden'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'aside',
                            content: [
                                !creating && {
                                    block: 'button',
                                    attrs: { name: 'confirm', value: 'Видалити' },
                                    mods: { state: 'danger', confirm: 'yes' }
                                },
                                !creating && {
                                    block: 'button',
                                    attrs: { name: 'submit', value: 'Відредагувати' },
                                    mods: { state: 'warning', update: 'yes' }
                                },
                                creating && {
                                    block: 'button',
                                    attrs: { name: 'submit', value: 'Опублікувати' },
                                    mods: { state: 'success', create: 'yes' }
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
                                    mix: [{ block: 'animation', mods: { state: 'scale' } }],
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
                                                    attrs: { name: 'delete', value: 'Видалити' },
                                                    mods: { state: 'success', delete: 'yes' }
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
                    ]
                ]);
            })
        );

    }
});
