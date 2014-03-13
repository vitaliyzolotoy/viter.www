BEM.decl('i-page', null, {
    getPageJson: function (json) {
        return {
            block: 'b-page',
            title: 'Блоґ Віталія Золотого – нотатки на теми цікаві для мене',
            content: [
                {
                    block: 'content',
                    content: json
                },
                {
                    block: 'dialog',
                    mods: { auth: 'yes' },
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
                                    content: 'Авторизуватися'
                                },
                                {
                                    elem: 'content',
                                    content: [
                                        'Введіть ваш емейл та пароль',
                                        {
                                            block: 'auth-form',
                                            content: [
                                                {
                                                    block: 'input',
                                                    attrs: {
                                                        name: 'email',
                                                        type: 'text',
                                                        placeholder: 'Емейл',
                                                        autofocus: 'autofocus'
                                                    }
                                                },
                                                {
                                                    block: 'input',
                                                    attrs: {
                                                        name: 'password',
                                                        type: 'password',
                                                        placeholder: 'Пароль'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'actions',
                                    content: [
                                        {
                                            block: 'button',
                                            attrs: { name: 'auth', value: 'Авторизуватися' },
                                            mods: { state: 'success', auth: 'yes' }
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
                },
                {
                    block: 'analytics'
                }
            ]
        }
    }
});
