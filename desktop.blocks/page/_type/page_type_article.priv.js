var blocks = {};

blocks['page'] = function(data) {
    return [
        {
            block: 'page',
            mods: { type: 'article' },
            title: 'The Feature',
            head: [
                {
                    elem: 'css', url: '/desktop.bundles/article/_article.css'
                },
                {
                    elem: 'js', url: '/desktop.bundles/article/_article.js'
                },
                {
                    elem: 'favicon', url: '/favicon.ico'
                }
            ],
            content:[
                {
                    block: 'landing',
                    content: [
                        {
                            block: 'logo',
                            mix: { block: 'font' },
                            content: 'The Feature'
                        }
                    ]
                },
                {
                    block: 'analytics'
                }
            ]
        }
    ]
};
