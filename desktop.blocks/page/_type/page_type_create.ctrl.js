var s3 = require('s3');

var client = s3.createClient({
});

var create = {

    create: function(request, response) {
        async.parallel({
            article: function(callback){

                if (request.method == 'POST') {


                    // upload a file to s3
                    var uploader = client.upload(request.files.file.path, 'articles/' + request.files.file.name);
                    uploader.on('error', function(err) {
                    console.error("unable to upload:", err.stack);
                    });
                    uploader.on('progress', function(amountDone, amountTotal) {
                    console.log("progress", amountDone, amountTotal);
                    });
                    uploader.on('end', function() {
                    console.log("done");
                    });

                console.log(request.files.file);



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
