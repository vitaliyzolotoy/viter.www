BEM.JSON.decl({name: 'header'}, {
    onBlock: function (ctx) {
        ctx.content([
            {
                block: 'logo',
                content: {
                    block: 'link',
                    url: '/notes/',
                    content: 'Блоґ Віталія Золотого'
                }
            }
        ]);
    }
});
