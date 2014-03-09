BEM.JSON.decl({name: 'rss'}, {
    onBlock: function (ctx) {
        ctx.attr('version', '2.0');
        ctx.attr('xmlns:atom', 'http://www.w3.org/2005/Atom');
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('notes')
            .then(function(result) {
                var date = new Date(result.notes[0].created).toUTCString();
                ctx.content([
                    {
                        elem: 'channel',
                        content: [
                            {
                                elem: 'title',
                                content: 'Блоґ Віталія Золотого',
                            },
                            '<link>http://thefeature.com.ua</link>',
                            {
                                elem: 'description',
                                content: ''
                            },
                            {
                                elem: 'pubDate',
                                content: date
                            },
                            {
                                elem: 'lastBuildDate',
                                content: date
                            },
                            result.notes.map(function(item) {
                                var date = new Date(item.created).toUTCString();
                                return {
                                    elem: 'item',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: item.title
                                        },
                                        '<link>http://thefeature.com.ua/notes/'+ item._id + '</link>',
                                        {
                                            elem: 'guid',
                                            content: 'http://thefeature.com.ua/notes/' + item._id
                                        },
                                        {
                                            elem: 'description',
                                            content: item.content
                                        },
                                        {
                                            elem: 'pubDate',
                                            content: date
                                        }
                                    ]
                                };
                            })
                        ]
                    }
                ]);
            })
        );
    }
});
