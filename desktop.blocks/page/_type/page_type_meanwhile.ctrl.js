var meanwhile = {

    meanwhile: function(request, response) {

        async.parallel({
            test1: function(callback){
                callback();
            },
            articles: function(callback){
                db.model('article', models.article())
                .find()
                .sort({date: -1})
                .execFind(callback);
            }
        },
        function(err, results){
            var data = {
                page: 'meanwhile',
                articles: results.articles,
            };
            page.render(data, response);
        });

    }

}

module.exports = meanwhile;
