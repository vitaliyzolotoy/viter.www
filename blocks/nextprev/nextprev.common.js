BEM.JSON.decl({name: 'nextprev'}, {
    onBlock: function(ctx) {
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('nextprev/' + ctx.param('id'))
            .then(function(result) {
                ctx.content([
                    result.nextprev && result.nextprev[0] && {
                        elem: 'item',
                        elemMods: { next: 'yes' },
                        content: {
                            block: 'link',
                            url: '/notes/' + result.nextprev[0]._id,
                            content: result.nextprev[0].title
                        }
                    },
                    result.nextprev && result.nextprev[1] && {
                        elem: 'item',
                        elemMods: { prev: 'yes' },
                        content: {
                            block: 'link',
                            url: '/notes/' + result.nextprev[1]._id,
                            content: result.nextprev[1].title
                        }
                    }
                ]);
            })
        );
    }
});
