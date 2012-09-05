/**
 * Module dependencies.
 */
var express = require('express'),
        routes = require('./routes'),
        http = require('http'),
        path = require('path'),
        vm = require('vm'),
        fs = require('fs'),
        mg = require('mongoose'),
        db = mg.createConnection('localhost' , 'test'),
        models = require('./models'),
        Page;

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 8080);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

models.defineModels(mg, function() {
    app.Page = Page = db.model('Page');
})

app.get('/', function (req, res){
    routes.index(req, res, app.Page, fs, path, vm);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});