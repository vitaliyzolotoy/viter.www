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
                        content: 'Руїна'
                    },
                    ', 2013–14 рр.'
                ]
            },
            !BEM.blocks['i-vk'].isAuth() && {
                block: 'auth',
                content: [
                    {
                        block: 'link',
                        mods: {login: 'yes'},
                        url: '/login/',
                        content: 'Увійти'
                    }
                ]
            },
            BEM.blocks['i-vk'].isAuth() && {
                block: 'write',
                content: [
                    {
                        block: 'link',
                        url: '/editor/',
                        content: 'Написати'
                    }
                ]
            },
            BEM.blocks['i-vk'].isAuth() && {
                block: 'auth',
                content: [
                    {
                        block: 'link',
                        mods: {logout: 'yes'},
                        url: '/logout/',
                        content: 'Вийти'
                    }
                ]
            },
            {
                block: 'subscribe',
                content: [
                    {
                        block: 'link',
                        url: '/rss/',
                        content: 'РСС'
                    }
                ]
            }
        ]);
    }
});
