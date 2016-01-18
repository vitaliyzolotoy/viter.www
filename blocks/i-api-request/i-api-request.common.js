BEM.decl('i-api-request', null, {
    post: function (resource, data) {
        return this._request('post', resource, data);
    },

    'delete': function (resource, data) {
        return this._request('delete', resource, data);
    },

    put: function (resource, data) {
        return this._request('put', resource, data);
    }
});
