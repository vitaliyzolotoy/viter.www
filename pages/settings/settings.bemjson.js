([
    {
        block: 'b-page',
        mods: { page: 'settings' },
        title: 'Інформація про блоґ',
        head: [
            {
                elem: 'favicon',
                url: '/favicon.ico'
            },
            {
                elem: 'css',
                url: '/pages/settings/_settings.css'
            },
            {
                block: 'i-jquery',
                elem: 'core'
            },
            {
                elem: 'js',
                url: '/pages/settings/_settings.js'
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
                                content: 'Назва блоґу:'
                            },
                            {
                                elem: 'input',
                                attrs: { id: 'title', type: 'text', name: 'title' }
                            },
                            {
                                elem: 'label',
                                attrs: { for: 'description' },
                                content: 'Опис:'
                            },
                            {
                                elem: 'textarea',
                                attrs: { id: 'content', name: 'content' }
                            },
                            {
                                elem: 'label',
                                attrs: { for: 'author' },
                                content: 'Автор:'
                            },
                            {
                                elem: 'input',
                                attrs: { id: 'author', type: 'text', name: 'author' }
                            },
                            {
                                elem: 'label',
                                attrs: { for: 'email' },
                                content: 'Електропошта:'
                            },
                            {
                                elem: 'input',
                                attrs: { id: 'email', type: 'text', name: 'email' }
                            },
                            {
                                elem: 'button',
                                attrs: { type: 'submit', value: 'Зберегти' }
                            }
                        ]
                    }
                ]
            }
        ]
    }
])
