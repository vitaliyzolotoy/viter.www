var blocks = {};

blocks['page'] = function(data) {
    return [
        {
            block: 'page',
            mods: { type: 'create' },
            title: 'The Feature',
            head: [
                {
                    elem: 'css', url: '/desktop.bundles/create/_create.css'
                },
                {
                    elem: 'js', url: '/desktop.bundles/create/_create.js'
                },
                {
                    elem: 'favicon', url: '/favicon.ico'
                }
            ],
            content:[
                {
                    block: 'section',
                    content: [
                        {
                            block: 'form',
                            attrs: { method: 'post'},
                            content: [
                                {
                                    block: 'label',
                                    attrs: { for: 'title' },
                                    content: 'Тема статті:'
                                },
                                {
                                    block: 'input',
                                    attrs: { id: 'title', type: 'text', name: 'title' }
                                },
                                {
                                    block: 'label',
                                    attrs: { for: 'content' },
                                    content: 'Повний текст статті:'
                                },
                                {
                                    block: 'textarea',
                                    attrs: { id: 'content', name: 'content' }
                                },
                                {
                                    block: 'button',
                                    attrs: { type: 'submit', value: 'Опублікувати' }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'analytics'
                }
            ]
        }
    ]
};
