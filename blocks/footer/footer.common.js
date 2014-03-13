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
                    mods: { pseudo: 'yes' },
                    content: 'Авторизуватися'
                }
            },
            BEM.blocks['i-auth'].check() && {
                block: 'auth',
                js: true,
                content: [
                    'Ви авторизовані, як ',
                    {
                        block: 'link',
                        url: '/zolotoy/',
                        content: 'Віталій Золотой'
                    },
                    ' ',
                    {
                        block: 'link',
                        mods: { pseudo: 'yes', logout: 'yes' },
                        content: 'Вийти?'
                    }
                ]
            }
        ]);
    }
});
