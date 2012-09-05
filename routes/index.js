exports.index = function (req, res, Page, fs, path, vm) {
    var priv,
        bemjson,
        bemhtml;

    Page.findOne({}, function (err, data) {
        if(err);

        fs.readFile(path.join(__dirname, '..', 'pages-desktop', 'index', '_index.priv.js'), 'utf-8', function(err, file){
            if(err);

            vm.runInThisContext(file);

            bemjson = blocks['b-page']({ page: data});
            bemhtml = BEMHTML.apply(bemjson);

            res.send(bemhtml);
        });
    })
};