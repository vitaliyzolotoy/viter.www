// READ a Single Article by ID
viter.get('/api/articles/:id', function (request, response) {
    return ArticleModel.findById(request.params.id, function (error, article) {
        if (!error) {
            return response.send(article);
        } else {
            return console.log(error);
        }
    });
});
