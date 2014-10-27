BEM.JSON.decl({name: 'editor'}, {
    onBlock: function(ctx) {
        ctx.param('js', true);
        var creating = true,
            module = ctx.param('module') || false;
            id = module && module[0].substring(8),
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
                                        block: 'title',
                                        attrs: { id: 'title', 'data-placeholder': '' },
                                        tag: 'h2',
                                        content: item.title
                                    },
                                    {
                                        block: 'text',
                                        attrs: { id: 'text', 'data-placeholder': '' },
                                        content: item.content
                                    },
                                    '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>',
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
                ]);
            })
        );

    }
});
