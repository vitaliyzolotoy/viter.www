var async = require('async'),
    path = require('path'),
    vm = require('vm'),
    fs = require('fs');

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
