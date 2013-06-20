BEM.JSON.decl({name: 'b-node-module-doc'}, {

    onBlock: function(ctx) {
        var name = ctx.param('name');
        
        ctx.defer(

            BEM.blocks['i-api-doc'].module(name)
                .then(function (result) {

                    ctx.content([
                        {elem: 'desc', content: result.desc},
                        {
                            elem: 'methods',
                            content: (result.methods || []).map(function (method) {
                                return {
                                    elem: 'method',
                                    method: method
                                }
                            })
                        }
                    ]);

                })
        );
    },

    onElem: {
        method: function (ctx) {
            var method = ctx.param('method');

            ctx.content([
                {elem: 'method-name', tag: 'h2', content: method.textRaw},
                {elem: 'method-desc', content: method.desc}
            ]);
        }
    }

});
