BEM.JSON.decl({name: 'b-node-toc'}, {

    onBlock: function(ctx) {
        
        ctx.defer(
            
            BEM.blocks['i-api-doc'].index()
                .then(function (result) {

                    ctx.content([
                        {elem: 'title', tag: 'h4', content: 'Table of Contents'},
                        {
                            elem: 'toc',
                            tag: 'ul',
                            content: result.map(function (elem) {
                                return {
                                    tag: 'li',
                                    content: {
                                        block: 'b-link',
                                        content: elem.text,
                                        url: elem.url
                                    }
                                }    
                            })
                        }
                    ]);

                })
        );
    }

});
