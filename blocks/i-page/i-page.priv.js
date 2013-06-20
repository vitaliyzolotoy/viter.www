BEM.decl('i-page', null, {
    /**
     * Default bemjson for all pages
     *
     * @param {Mixed} json
     * 
     * @return {Object} bemjson
     */
    getJson: function (json) {
        return {
            block: 'b-page',
            content: [
                {block: 'b-head', content: 'BEM-node test project'},
                {block: 'b-content', content: json},
                {block: 'b-foot', content: [
                    {tag: 'img', attrs: {src: 'http://nodejs.org/images/logo.png'}},
                    {tag: 'img', attrs: {src: 'http://bem.info/bundles-desktop/index/blocks/logo/_type/logo_type_main.png'}}
                ]}
            ]
        }
    }
});
