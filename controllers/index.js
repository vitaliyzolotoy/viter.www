var async = require('async'),
    path = require('path'),
    vm = require('vm'),
    fs = require('fs'),

    mongoose = require('mongoose'),
    db = mongoose.createConnection('localhost', 'viter'),
    models = require('../models'),
    date_format = require('dateformat');


var controllers = {
    index: function(request, response) {

        async.parallel({
            blog: function(callback){
                db.model('blog', models.blog())
                .find(callback);
            },
            articles: function(callback){
                db.model('article', models.article())
                .find()
                .sort({date: -1})
                .execFind(callback);
            }
        },
        // optional callback
        function(err, results){
            // обробимо дані
            // Насичуємо об’єкт даними
            var data = {
                page: 'index',
                articles: results.articles,
                blog: results.blog
            };
            controllers.render(data, response);
        });

    },

    add: function(request, response) {
        async.parallel({
            blogs: function(callback){
                db.model('yo', models.blog())
                .find(callback);
            },
            save: function(callback){
                if (request.method == 'POST') {
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
        // optional callback
        function(err, results){
            // обробимо дані
            // Насичуємо об’єкт даними
            var data = {
                page: 'add',
                blogs: results.blogs,
                save: results.save
            };
            controllers.render(data, response);
        });
    },

    settings: function(request, response) {
        async.parallel({
            blog: function(callback){
                if (request.method == 'POST') {
                    var blog = db.model('blog', models.blog());
                    var init = new blog({
                        title: request.body.title,
                        description: request.body.description,
                        author: request.body.author,
                        email: request.body.email
                    });
                    init.save(callback);
                } else {
                    callback();
                }
            }
        },
        function(error, results){
            var data = {
                page: 'settings',
                settings: results.blog
            };
            controllers.render(data, response);
        });
    },

    date: function() {

        date_format.i18n = {
            dayNames: [
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
                'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'
            ],
            monthNames: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                'січня', 'лютого', 'березня', 'квітня', 'трявня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
            ]
        };

        date = date_format(articles.date, "d mmmm о HH:MM");

    },

    remove: function(request, response) {
        async.parallel({
            remove: function(callback) {
                db.model('article', models.article())
                .find({ _id: '50f2f8ecc3747a4311000003' })
                .remove(callback);
            }
        },
        function(error, results) {
            response.redirect('/blog/');
        });
    },

    new: function(request, response) {
        async.parallel({
            article: function(callback){
                if (request.method == 'POST') {
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
        function(error, results) {
            var data = {
                page: 'new'
            };
            controllers.render(data, response);
        });
    },

    update: function(request, response) {
        async.parallel({
            article: function(callback){
                db.model('article', models.article())
                .find({ _id: request.body.id })
                .execFind(callback);
            }
        },
        function(error, results) {
            var data = {
                page: 'new',
                article: results.article
            };
            controllers.render(data, response);
        });
    },

    render: function(data, response) {
        fs.readFile(path.join(__dirname, '..', 'pages', data.page, '_' + data.page + '.priv.js'), 'utf-8', function(error, file){
            if(error) {};
            vm.runInThisContext(file);
            var bemjson = blocks['b-page'](data),
                bemhtml = BEMHTML.apply(bemjson);
            response.send(bemhtml);
        });
    }

}

module.exports = controllers;