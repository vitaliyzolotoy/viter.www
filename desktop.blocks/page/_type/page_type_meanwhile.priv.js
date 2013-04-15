var blocks = {};

blocks['page'] = function(data) {
    return [
        {
            block: 'page',
            title: 'The Feature',
            head: [
                {
                    elem: 'css', url: '/desktop.bundles/meanwhile/_meanwhile.css'
                },
                {
                    elem: 'js', url: '/desktop.bundles/meanwhile/_meanwhile.js'
                },
                {
                    elem: 'favicon', url: '/favicon.ico'
                }
            ],
            content:[
                {
                    block: 'section',
                    content: data.articles.map(function(item, index) {
                        return [
                            {
                                block: 'article',
                                content: [
                                    {
                                        elem: 'title',
                                        mix: [{ block: 'font' }],
                                        content: item.title
                                    },
                                    {
                                        elem: 'text',
                                        content: item.content
                                    },
                                    {
                                        elem: 'time',
                                        attrs: { pubdate: item.date },
                                        content: item.date + ''
                                    }
                                ]
                            }
                        ]
                    })
                },
                {
                    block: 'analytics'
                }
            ]
        }
    ]
};
