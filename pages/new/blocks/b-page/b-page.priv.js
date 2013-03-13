var blocks = {};

blocks['b-page'] = function(data) {
    return [
        {
            block: 'b-page',
            title: 'Записати нову замітку',
            head: [
                {
                    elem: 'favicon',
                    url: '/favicon.ico'
                },
                {
                    elem: 'css',
                    url: '/pages/new/_new.css'
                },
                {
                    block: 'i-jquery',
                    elem: 'core'
                },
                {
                    elem: 'js',
                    url: '/pages/new/_new.js'
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
                                    content: 'Блоґ Віталія Золотого'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'section',
                    content: [
                        {
                            block: 'form',
                            attrs: { method: 'post'},
                            content: [
                                {
                                    elem: 'label',
                                    attrs: { for: 'title' },
                                    content: 'Тема замітки:'
                                },
                                {
                                    elem: 'input',
                                    attrs: { id: 'title', type: 'text', name: 'title', value: '' }
                                    // attrs: { id: 'title', type: 'text', name: 'title', value: data.article[0].title }
                                },
                                {
                                    elem: 'label',
                                    attrs: { for: 'content' },
                                    content: 'Власне, повний текст замітки:'
                                },
                                {
                                    elem: 'textarea',
                                    attrs: { id: 'content', name: 'content' },
                                    content: ''
                                    // content: data.article[0].content
                                },
                                {
                                    elem: 'button',
                                    attrs: { type: 'submit', value: 'Опублікувати' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
