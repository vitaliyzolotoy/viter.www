BEM.decl({block: 'i-api'}, null, {

    module: function(name) {
        return BEM.blocks['i-api-request']
            .get(name)
            .then(function(result) {
                return result;
            });
    }

});
