exports.index = function (req, res, Page, fs, path, vm) {
    var priv,
        bemjson,
        bemhtml;

    Page.findOne({}, function (err, data) {
        if(err);

        fs.readFile(path.join(__dirname, '..', 'pages', 'index', '_index.priv.js'), 'utf-8', function(err, file){
            if(err);

            vm.runInThisContext(file);

            bemjson = blocks['b-page']({ page: data });
            bemhtml = BEMHTML.apply(bemjson);

            res.send(bemhtml);
        });
    })
};

exports.add = function (req, res, Page, fs, path, vm) {
    var priv,
        bemjson,
        bemhtml;

    Page.findOne({}, function (err, data) {
        if(err);

        fs.readFile(path.join(__dirname, '..', 'pages', 'add', '_add.priv.js'), 'utf-8', function(err, file){
            if(err);

            vm.runInThisContext(file);

            bemjson = blocks['b-page']({ page: data });
            bemhtml = BEMHTML.apply(bemjson);

            res.send(bemhtml);
        });
    })
};

exports.post = function (req, res, Page, fs, path, vm) {
    var priv,
        bemjson,
        bemhtml;

    Page.findOne({}, function (err, data) {
        if(err);

        fs.readFile(path.join(__dirname, '..', 'pages', 'post', '_post.priv.js'), 'utf-8', function(err, file){
            if(err);

            vm.runInThisContext(file);

            bemjson = blocks['b-page']({ page: data });
            bemhtml = BEMHTML.apply(bemjson);

            res.send(bemhtml);
        });
    })
};
