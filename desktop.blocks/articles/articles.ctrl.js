// Define Model for Article
var article = new schema({
    title: {
        type: String,
        // required: true
    },
    content: {
        type: String,
        // required: true
    },
    modified: {
        type: Date,
        default: Date.now
    }
});

var ArticleModel = mongoose.model('article', article);

// READ a List of Articles
viter.get('/api/articles', function (request, response) {
    return ArticleModel.find(function (error, articles) {
        if (!error) {
            return response.send(articles);
        } else {
            return console.log(error);
        }
    });
});
