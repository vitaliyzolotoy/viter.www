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
            }
        ]);
    }
});
