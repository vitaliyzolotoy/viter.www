/* ../../desktop.blocks/page/page.ctrl.js begin */
var async = require('async'),
    path = require('path'),
    vm = require('vm'),
    fs = require('fs'),

    mongoose = require('mongoose'),
    db = mongoose.createConnection('localhost', 'viter');

var models = {

    article: function() {
        return mongoose.Schema({
            title: String,
            content: String,
            date: { type: Date, default: Date.now }
        });
    }

};

var page = {

    render: function(data, response) {
        fs.readFile(path.join(__dirname, '_' + data.page + '.priv.js'), 'utf-8', function(error, file){
            if(error) {};
            vm.runInThisContext(file);
            var bemjson = blocks['page'](data),
                bemhtml = BEMHTML.apply(bemjson);
            response.send(bemhtml);
        });
    }

}

module.exports = page;

/* ../../desktop.blocks/page/page.ctrl.js end */
;
/* ../../desktop.blocks/page/_type/page_type_index.ctrl.js begin */
var index = {

    index: function(request, response) {
        async.parallel({
            test1: function(callback){
                callback();
            },
            test2: function(callback){
                callback();
            }
        },
        function(err, results){
            var data = {
                page: 'index'
            };
            page.render(data, response);
        });
    }

}

module.exports = index;

/* ../../desktop.blocks/page/_type/page_type_index.ctrl.js end */
;
