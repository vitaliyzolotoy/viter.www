BEM.JSON.decl({name: 'b-article'}, {

    onBlock: function(ctx) {
        var name = ctx.param('module');

        ctx.defer(
            
            BEM.blocks['i-api']
                .module(name)
                .then(function(result) {

                    ctx.content([
                        {
                            elem: 'title',
                            tag: 'h4',
                            content: result.article.title
                        },
                        {
                            elem: 'content',
                            tag: 'p',
                            content: result.article.content
                        }
                    ]);

                })
        );
    }

});
