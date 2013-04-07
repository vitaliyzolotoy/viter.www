var index = {

    index: function(request, response) {
        async.parallel({
            test1: function(callback){
                callback();
            },
            test2: function(callback){
                callback();
            }
        },
        function(err, results){
            var data = {
                page: 'index'
            };
            page.render(data, response);
        });
    }

}

module.exports = index;
