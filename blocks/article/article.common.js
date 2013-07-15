BEM.JSON.decl({name: 'article'}, {

    onBlock: function(ctx) {
        var data = {
            module: ctx.param('module')
        };
        ctx.defer(
            BEM.blocks['i-api']
            .module(data)
            .then(function(result) {
                ctx.content([
                    {
                        block: 'section',
                        content: [
                            {
                                block: 'link',
                                url: '/articles/',
                                content: '<--'
                            },
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
                        ]
                    }
                ]);
            })
        // ctx.defer
        );
    }

});
