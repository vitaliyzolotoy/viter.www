BEM.JSON.decl({name: 'tags'}, {
    onBlock: function(ctx) {
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('tags/' + ctx.param('id'))
            .then(function(result) {
                ctx.content([
                    result.tags && result.tags.map(function(item) {
                        return [
                            {
                                elem: 'item',
                                content: {
                                    block: 'link',
                                    url: '#',
                                    content: item.content
                                }
                            }
                        ]
                    })
                ]);
            })
        );
    }
});
