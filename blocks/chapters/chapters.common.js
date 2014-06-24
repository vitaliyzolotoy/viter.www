BEM.JSON.decl({name: 'chapters'}, {
    onBlock: function(ctx) {
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('chapters')
            .then(function(result) {
                ctx.content([
                    result.chapters && result.chapters.map(function(item) {
                        return [
                            {
                                elem: 'item',
                                attrs: {
                                    value: item._id

                                },
                                content: [
                                    item.section,
                                    ' ',
                                    item.content
                                ]
                            }
                        ]
                    })
                ]);
            })
        );
    }
});
