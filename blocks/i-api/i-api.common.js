BEM.decl({block: 'i-api'}, null, {

    module: function(data) {
        return BEM.blocks['i-api-request']
            .get(data.module, {params: data.params})
            .then(function(result) {
                return result;
            });
    },

    post: function(data) {
        return BEM.blocks['i-api-request']
            .post(data.module, {params: data.params})
            .then(function(result) {
                return result;
            });
    }

});
