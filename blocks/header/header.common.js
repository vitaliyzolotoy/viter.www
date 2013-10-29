BEM.JSON.decl({name: 'header'}, {
    onBlock: function (ctx) {
        ctx.content([
            {
                block: 'logo',
                content: [
                    {
                        block: 'link',
                        url: '/articles/',
                        content: 'The Feature'
                    }
                ]
            }
        ]);
    }
});
