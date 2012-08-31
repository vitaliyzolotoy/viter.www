/**
 * Module dependencies.
 */
var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path')
    , fs = require('fs')
    , mg = require('mongoose')
    , db = mg.createConnection('localhost' , 'test');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function (req, res){
    routes.index(req, res, mg, db);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});