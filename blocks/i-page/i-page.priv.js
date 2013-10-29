BEM.decl('i-page', null, {
    getPageJson: function(json) {
        return {
            block: 'b-page',
            title: 'The Feature',
            head: [
                { elem: 'favicon', url: '/favicon.ico' }
            ],
            content: [
                {
                    block: 'header'
                },
                {
                    block: 'content',
                    content: json
                },
                {
                    block: 'footer'
                },
                {
                    block: 'analytics'
                }
            ]
        }
    }
});
