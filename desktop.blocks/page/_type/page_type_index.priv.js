var blocks = {};

blocks['page'] = function(data) {
    return [
        {
            block: 'page',
            title: 'The Feature',
            head: [
                {
                    elem: 'css', url: '/desktop.bundles/index/_index.css'
                },
                {
                    elem: 'js', url: '/desktop.bundles/index/_index.js'
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
