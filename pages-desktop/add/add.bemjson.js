([
    {
        block: 'b-page',
        title: 'Вітер',
        head: [
            {
                elem: 'favicon',
                url: '/favicon.ico'
            },
            {
                elem: 'css',
                url: '/pages-desktop/add/_add.css'
            },
            {
                block: 'i-jquery',
                elem: 'core'
            },
            {
                elem: 'js',
                url: '/pages-desktop/add/_add.js'
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
                        elem: 'inner',
                        content: [
                            {
                                block: 'form',
                                content: [
                                    {
                                        elem: 'input',
                                        attrs: { type: 'text', name: 'title' }
                                    },
                                    {
                                        elem: 'textarea',
                                        attrs: { name: 'content' }
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
            },
            {
                block: 'aside',
                content: ''
            },
            {
                block: 'foot',
                content: [
                    {
                        elem: 'author',
                        content: [
                            '© ',
                            {
                                block: 'b-link',
                                url: 'mailto:vitaly.zolotoy@mail.com',
                                attrs: { rel: 'author' },
                                content: 'Віталій Золотой'
                            }
                        ]
                    },
                    {
                        elem: 'year',
                        content: ' · 2011…2012 рр.'
                    }
                ]
            }
        ]
    }
])
