// UPDATE a Single Article by ID
viter.put('/api/articles/:id', function (request, response) {
    return ArticleModel.findById(request.params.id, function (error, article) {
        article.title = request.body.title;
        return article.save(function (error) {
            if (!error) {
                console.log('updated');
            } else {
                console.log(error);
            }
        return response.send(article);
        });
    });
});
