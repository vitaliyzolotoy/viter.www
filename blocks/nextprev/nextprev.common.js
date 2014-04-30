BEM.JSON.decl({name: 'nextprev'}, {
    onBlock: function(ctx) {
        var current = ctx.param('id');
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('notes')
            .then(function(result) {
                ctx.content([
                    {
                        elem: 'item',
                        elemMods: { next: 'yes' },
                        content: {
                            block: 'link',
                            url: '#',
                            content: 'Наступна'
                        }
                    },
                    {
                        elem: 'item',
                        elemMods: { prev: 'yes' },
                        content: {
                            block: 'link',
                            url: '#',
                            content: 'Попередня'
                        }
                    }
                ]);
            })
        );
    }
});
