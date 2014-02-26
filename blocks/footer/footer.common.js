BEM.JSON.decl({name: 'footer'}, {
    onBlock: function (ctx) {
        ctx.content([
            {
                block: 'copyright',
                content: [
                    '© Журнал «',
                    {
                        block: 'link',
                        url: '/',
                        content: 'The Feature'
                    },
                    '», 2013–14 рр.'
                ]
            }
        ]);
    }
});
