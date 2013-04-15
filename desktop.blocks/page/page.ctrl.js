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
