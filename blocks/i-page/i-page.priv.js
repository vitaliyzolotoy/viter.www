BEM.decl('i-page', null, {
    getJson: function(json) {
        return {
            block: 'b-page',
            title: 'The Feature',
            head: [
                { elem: 'favicon', url: '/favicon.ico' }
            ],
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            block: 'logo',
                            content: [
                                {
                                    block: 'link',
                                    url: '/',
                                    content: 'The Feature'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'content',
                    content: json
                },
                {
                    block: 'footer',
                    content: [
                        {
                            block: 'copyright',
                            content: [
                                '© Журнал «',
                                {
                                    block: 'link',
                                    url: '/',
                                    content: 'The Feature'
                                },
                                '», 2013 рік'
                            ]
                        }
                    ]
                },
                {
                    block: 'analytics'
                }
            ]
        }
    }
});
