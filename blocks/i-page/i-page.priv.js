BEM.decl('i-page', null, {
    /**
     * Default bemjson for all pages
     *
     * @param {Mixed} json
     * 
     * @return {Object} bemjson
     */
    getJson: function(json) {
        return [
            {
                block: 'b-page',
                title: 'The Feature',
                head: [
                    { elem: 'favicon', url: '/favicon.ico' }
                ],
                content: [
                    {
                        block: 'header',
                        content: 'head'
                    },
                    {
                        block: 'b-content',
                        content: json
                    },
                    {
                        block: 'footer',
                        content: 'footer'
                    },
                    {
                        block: 'analytics'
                    }
                ]
            }
        ]
    }
});
