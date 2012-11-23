([
    {
        block: 'b-page',
        mods: { priv: 'add' },
        title: 'Записати нову замітку',
        head: [
            {
                elem: 'favicon',
                url: '/favicon.ico'
            },
            {
                elem: 'css',
                url: '/pages/add/_add.css'
            },
            {
                block: 'i-jquery',
                elem: 'core'
            },
            {
                elem: 'js',
                url: '/pages/add/_add.js'
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
                        content: [
                            {
                                elem: 'label',
                                attrs: { for: 'title' },
                                content: 'Тема замітки:'
                            },
                            {
                                elem: 'input',
                                attrs: { id: 'title', type: 'text', name: 'title' }
                            },
                            {
                                elem: 'label',
                                attrs: { for: 'content' },
                                content: 'Власне, повний текст замітки:'
                            },
                            {
                                elem: 'textarea',
                                attrs: { id: 'content', name: 'content' }
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
])
