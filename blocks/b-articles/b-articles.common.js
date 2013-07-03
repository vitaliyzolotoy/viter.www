BEM.JSON.decl({name: 'b-articles'}, {

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
                            content: 'Table of Content'
                        },
                        {
                            elem: 'toc',
                            tag: 'ul',
                            content: result.articles.map(function(item) {
                                return [
                                    {
                                        tag: 'li',
                                        content: {
                                            block: 'b-link',
                                            content: item.title,
                                            url: '/articles/' + item._id
                                        }
                                    }
                                ]
                            })
                        }
                    ]);

                })
        );
    }

});
