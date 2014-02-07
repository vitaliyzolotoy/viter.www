BEM.decl({block: 'i-api', baseBlock: 'i-api-request'}, null, {
    module: function(data) {
        return BEM.blocks['i-api-request']
            .get(data.module, {params: data.params})
            .then(function(result) {
                return result;
            });
    },

    /**
     * Request to backend. It seems it used 'post', 'delete' and 'put' methods inside
     * to request data. So we should define them.
     * @param type Request method
     * @param resource
     * @param data
     * @returns {Promise}
     */
    request: function (type, resource, data) {
        return this._request(type, resource, data);
    },

    /**
     * Post request request to backend
     * @param resource
     * @param data
     * @returns {Promise}
     */
    post: function (resource, data) {
        return this._request('post', resource, data);
    },

    /**
     * Delete request to backend
     * @param resource
     * @param data
     * @returns {Promise}
     */
    'delete': function (resource, data) {
        return this._request('delete', resource, data);
    },

    /**
     * Put request to backend
     * @param resource
     * @param data
     * @returns {Promise}
     */
    put: function (resource, data) {
        return this._request('put', resource, data);
    }

});
