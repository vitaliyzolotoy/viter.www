BEM.JSON.decl({name: 'landing'}, {
    onBlock: function (ctx) {
        ctx.content([
            {
                block: 'headline',
                content: 'Блоґ Віталія Золотого'
            },
            {
                block: 'entrance',
                content: [
                    {
                        elem: 'title',
                        content: 'Нотатки на теми цікаві для мене'
                    },
                    {
                        elem: 'links',
                        content: [
                            {
                                elem: 'item',
                                content: [
                                    {
                                        block: 'link',
                                        url: '/notes/52b417f05917ccdb01000001',
                                        content: 'Прочитати вступ'
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        block: 'link',
                                        url: '/notes/',
                                        content: 'Зміст'
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        elem: 'latest',
                                        content: 'Нове:'
                                    },
                                    {
                                        block: 'link',
                                        url: '/notes/52b445a15917ccdb01000002',
                                        content: 'Про поїздку до млина'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
    }
});
