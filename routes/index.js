var fs = require('fs'),
    path = require('path'),
    vm = require('vm');

exports.index = function (req, res, mg, db) {
    var pageSchema = new mg.Schema({
        title:String,
        body:String,
        date:{ type:Date, default:Date.now },
        hidden:Boolean
    });

    var Page = db.model('Page', pageSchema);

    // Насичуємо data
    var data = {
        page: 'index'
    }

    var priv = fs.readFileSync(path.join(__dirname, '..', 'pages-desktop', 'index', '_index.priv.js'), 'utf-8');
    
    vm.runInThisContext(priv);
    var bemjson = blocks['b-page'](data),
        bemhtml = BEMHTML.apply(bemjson);

    console.log(bemhtml);

    /*
    * Если раскоментировать блок он при каждом обращении будет создавать запись в базе данных 'test'
    * в колекции 'page', нужно для проверки
    */
//    var page = new Page({
//        title: 'Item 4',
//        body: 'Some text. Many, many and many. - Part IV',
//        hidden: false
//    });
//    page.save();

    Page.find(function (err, data) {
        if(err);
        res.json(bemhtml);
    })
};
