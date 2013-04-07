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
