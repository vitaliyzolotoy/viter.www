BEM.JSON.decl({name: 'create'}, {

    onBlock: function(ctx) {
        var data = {
            module: ctx.param('module'),
            params: ctx.param('ololo')
        };
        ctx.defer(
            BEM.blocks['i-api']
            .module(data)
            .then(function(result) {
                ctx.content([
                    {
                        block: 'b-link',
                        url: '/articles/',
                        content: '<--'
                    },
                    {
                        elem: 'title',
                        tag: 'h4',
                        content: 'Написати'
                    },
                    {
                        block: 'form',
                        attrs: { method: 'post', action: '/create/'},
                        content: [
                            {
                                block: 'label',
                                attrs: { for: 'title' },
                                content: 'Тема статті:'
                            },
                            {
                                block: 'input',
                                attrs: { id: 'title', type: 'text', name: 'title' }
                            },
                            {
                                block: 'label',
                                attrs: { for: 'content' },
                                content: 'Повний текст статті:'
                            },
                            {
                                block: 'textarea',
                                attrs: { id: 'content', name: 'content' }
                            },
                            {
                                block: 'button',
                                attrs: { type: 'submit', value: 'Опублікувати' }
                            }
                        ]
                    }
                ]);
            })
        // ctx.defer
        );
    }

});
