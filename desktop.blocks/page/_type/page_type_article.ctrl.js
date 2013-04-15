var article = {

    article: function(request, response) {
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
                page: 'article'
            };
            page.render(data, response);
        });
    }

}

module.exports = article;
