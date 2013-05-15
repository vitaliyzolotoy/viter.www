// CREATE a Single Article
viter.post('/api/articles', function (request, response) {
    var article;
    console.log('POST: ');
    console.log(request.body);
    article = new ArticleModel({
        title: request.body.title
    });
    article.save(function (error) {
        if (!error) {
            return console.log('created');
        } else {
            return console.log(error);
        }
    });
    return response.send(article);
});
