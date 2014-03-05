BEM.decl('i-page', null, {
    getPageJson: function (json) {
        return {
            block: 'b-page',
            title: 'Блоґ Віталія Золотого – нотатки на теми цікаві для мене',
            content: [
                {
                    block: 'content',
                    content: json
                },
                {
                    block: 'analytics'
                }
            ]
        }
    }
});
