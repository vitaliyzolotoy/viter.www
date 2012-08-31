/*
 * GET home page.
 */

exports.index = function (req, res, mg, db) {
    var pageSchema = new mg.Schema({
        title:String,
        body:String,
        date:{ type:Date, default:Date.now },
        hidden:Boolean
    });

    var Page = db.model('Page', pageSchema);

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
        res.json(data);
    })
};