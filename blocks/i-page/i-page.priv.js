BEM.decl('i-page', null, {
    getPageJson: function (json) {
        return {
            block: 'page',
            title: 'Руїна – записки українського самашедшого',
            mix: [{ block: 'animation', mods: { state: 'flash' } }],
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
                            mix: [{ block: 'animation' }],
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
                                                    mods: { email: 'yes' },
                                                    attrs: {
                                                        name: 'email',
                                                        type: 'text',
                                                        placeholder: 'Емейл',
                                                        autofocus: 'autofocus',
                                                        required: 'required'
                                                    }
                                                },
                                                {
                                                    block: 'input',
                                                    mods: { password: 'yes' },
                                                    attrs: {
                                                        name: 'password',
                                                        type: 'password',
                                                        placeholder: 'Пароль',
                                                        required: 'required'
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
                                            mods: { state: 'success', confirm: 'yes' }
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
                    block: 'alert',
                    mods: { state: 'success', message: 'note-deleted' },
                    mix: [{ block: 'animation', mods: { state: 'bounce' } }],
                    js: true,
                    content: 'Нотатка видалена'
                },
                {
                    block: 'analytics'
                }
            ]
        }
    },

    _getPageParams: function () {
        var params = this._state.get('page');
        if (!params) {
            params = {};
            this._state.set('page', params);
        }
        return params;
    },

    _setPageParams: function (name, value) {

        if (value === undefined) {
            this._state.set('page', name);
        } else {
            this._state.set('page.' + name, value);
        }
    }

});
