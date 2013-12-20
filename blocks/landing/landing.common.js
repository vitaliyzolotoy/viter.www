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
                                        url: '/articles/52b2e705c52f678811000001',
                                        content: 'Прочитати вступ'
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        block: 'link',
                                        url: '/articles/',
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
                                        url: '/articles/52b2e705c52f678811000001',
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
