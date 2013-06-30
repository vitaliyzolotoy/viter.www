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
            title: 'The Feature',
            content: [
                {block: 'b-content', content: json}
            ]
        }
    }
});
