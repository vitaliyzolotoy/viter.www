var create = {

    create: function(request, response) {
        async.parallel({
            article: function(callback){
                if (request.method == 'POST') {
                    var article = db.model('article', models.article());
                    var init = new article({
                        title: request.body.title,
                        content: request.body.content
                    });
                    init.save(callback);
                } else {
                    callback();
                }
            }
        },
        function(err, results){
            var data = {
                page: 'create'
            };
            page.render(data, response);
        });
    }

}

module.exports = create;
