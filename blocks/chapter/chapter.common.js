BEM.JSON.decl({name: 'chapter'}, {
    onBlock: function(ctx) {
        var data = ctx.param('js');
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('chapters/' + data.id)
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
