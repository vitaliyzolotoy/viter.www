BEM.JSON.decl({name: 'chapter'}, {
    onBlock: function(ctx) {
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('chapters/' + ctx.param('id'))
            .then(function(result) {
                ctx.content([
                    {
                        block: 'title',
                        tag: 'h3',
                        content: result.chapter
                    }
                ]);
            })
        );
    }
});
