BEM.JSON.decl({name: 'status'}, {
    onBlock: function (ctx) {
        var data = ctx.param('js');
        ctx.content([
            {
                block: 'time',
                mix: {block: 'animation'},
                attrs: {
                    pubdate: data.created,
                    datetime: data.modified
                },
                content: [
                    !data.published && 'збережено',
                    data.published && (data.created == data.modified) && 'опубліковано',
                    data.published && (data.created < data.modified) && 'оновлено',
                    ' ',
                    BEM.blocks['i-date'].beautify(data.modified)
                ]
            }
        ]);
    }
});
