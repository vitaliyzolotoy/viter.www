BEM.JSON.decl({name: 'editor'}, {
    onBlock: function(ctx) {
        var creating = true,
            module = ctx.param('module') || false;
            id = module && module[0].substring(8),
            input = 'notes/' + id;

        if (id) {
            creating = false;
        }

        ctx.param('js', {
            create: creating,
            id: id
        });

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
                                block: 'title',
                                attrs: {
                                    id: 'title',
                                    contenteditable: 'true',
                                    placeholder: 'Тема'
                                },
                                tag: 'h2',
                                content: item.title
                            },
                            {
                                block: 'status',
                                mods: {hidden: 'yes'},
                                js: {
                                    created: item.created,
                                    modified: item.modified,
                                    published: item.published || false
                                }
                            },
                            {
                                block: 'toolbar',
                                content: [
                                    {
                                        block: 'link',
                                        url: '#',
                                        attrs: {
                                            'data-role': 'bold'
                                        },
                                        content: 'b'
                                    },
                                    {
                                        block: 'link',
                                        url: '#',
                                        attrs: {
                                            'data-role': 'italic'
                                        },
                                        content: 'i'
                                    },
                                    {
                                        block: 'link',
                                        url: '#',
                                        attrs: {
                                            'data-role': 'strikeThrough'
                                        },
                                        content: 's'
                                    },
                                    {
                                        block: 'link',
                                        url: '#',
                                        attrs: {
                                            'data-role': 'h3'
                                        },
                                        content: 'h3'
                                    },
                                    {
                                        block: 'link',
                                        url: '#',
                                        attrs: {
                                            'data-role': 'h4'
                                        },
                                        content: 'h4'
                                    },
                                    {
                                        block: 'link',
                                        url: '#',
                                        attrs: {
                                            'data-role': 'p'
                                        },
                                        content: 'p'
                                    },
                                    {
                                        block: 'link',
                                        url: '#',
                                        attrs: {
                                            'data-role': 'blockquote'
                                        },
                                        content: '„“'
                                    }
                                ]
                            },
                            {
                                block: 'text',
                                attrs: {
                                    id: 'text',
                                    contenteditable: 'true',
                                    placeholder: 'А тут, власне, повний текст замітки…'
                                },
                                content: item.content
                            }
                        ]
                    },
                    !creating && {
                        block: 'aside',
                        content: [
                            !item.published && {
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
                                        mods: { data: 'chapter' },
                                        attrs: {
                                            name: 'chapter',
                                            type: 'hidden'
                                        }
                                    }
                                ]
                            },
                            !item.published && {
                                block: 'button',
                                attrs: { name: 'confirm', value: 'Видалити' },
                                mods: { state: 'danger', confirm: 'yes' }
                            },
                            !item.published && {
                                block: 'button',
                                attrs: { name: 'submit', value: 'Опублікувати' },
                                mods: { state: 'success', publish: 'yes' }
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
