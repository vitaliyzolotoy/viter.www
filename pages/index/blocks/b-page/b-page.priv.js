var blocks = {};

blocks['b-page'] = function(data) {
    return [
        {
            block: 'b-page',
            title: data.blog[0].title,
            head: [
                {
                    elem: 'favicon',
                    url: '/favicon.ico'
                },
                {
                    elem: 'css',
                    url: '/pages/' + data.page + '/_' + data.page + '.css'
                },
                {
                    block: 'i-jquery',
                    elem: 'core'
                },
                {
                    elem: 'js',
                    url: '/pages/' + data.page + '/_' + data.page + '.js'
                }
            ],
            content: [
                {
                    block: 'head',
                    content: [
                        {
                            elem: 'logo',
                            content: [
                                {
                                    block: 'b-icon'
                                }
                            ]
                        },
                        {
                            elem: 'title',
                            mix: [{ block: 'font' }],
                            content: [
                                {
                                    block: 'b-link',
                                    url: '/',
                                    content: data.blog[0].title
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'section',
                    content: [
                        (function(){
                            var articles = [];
                            for (var index in data.articles) {
                                article = {
                                    block: 'article',
                                    content: [
                                        {
                                            elem: 'title',
                                            mix: [{ block: 'font' }],
                                            content: [
                                                {
                                                    block: 'b-link',
                                                    url: '/blog/' + data.articles[index]._id + '/',
                                                    content: data.articles[index].title
                                                },
                                                {
                                                    block: 'form',
                                                    attrs: { method: 'post', action: '/blog/update/' },
                                                    content: [
                                                        {
                                                            elem: 'input',
                                                            attrs: { type: 'hidden', name: 'id', value: data.articles[index]._id }
                                                        },
                                                        {
                                                            elem: 'button',
                                                            attrs: { type: 'submit', value: '✎' }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'text',
                                            content: data.articles[index].content
                                        },
                                        {
                                            elem: 'time',
                                            attrs: { pubdate: data.articles[index].date },
                                            // content: '' + data.articles[index].date
                                            content: data.date + ''
                                        }
                                    ]
                                };
                                articles.push(article);
                            }
                            return articles;
                        })()
                    ]
                }
            ]
        }
    ]
};