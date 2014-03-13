BEM.JSON.decl({name: 'footer'}, {
    onBlock: function (ctx) {
        ctx.content([
            {
                block: 'copyright',
                content: [
                    '© ',
                    {
                        block: 'link',
                        url: '/',
                        content: 'Віталій Золотой'
                    },
                    ', 2013–14 рр.'
                ]
            },
            !BEM.blocks['i-auth'].check() && {
                block: 'auth',
                js: true,
                content: {
                    block: 'link',
                    mods: { pseudo: 'yes', login: 'yes'  },
                    content: 'Авторизуватися'
                }
            },
            BEM.blocks['i-auth'].check() && {
                block: 'auth',
                js: true,
                content: [
                    'Ви авторизовані. Написати ',
                    {
                        block: 'link',
                        url: '/postify/',
                        content: 'нотатку'
                    },
                    ' чи ',
                    {
                        block: 'link',
                        mods: { pseudo: 'yes', logout: 'yes' },
                        content: 'вийти'
                    },
                    '?'
                ]
            }
        ]);
    }
});
