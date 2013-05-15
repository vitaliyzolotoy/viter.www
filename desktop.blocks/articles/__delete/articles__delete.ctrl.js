// DELETE a Single Article by ID
viter.delete('/api/articles/:id', function (request, response) {
    return ArticleModel.findById(request.params.id, function (error, article) {
        return article.remove(function (error) {
            if (!error) {
                console.log('deleted');
                return response.send('');
            } else {
                console.log(error);
            }
        });
    });
});
