BEM.decl('i-page', null, {
    getPageJson: function (json) {
        return {
            block: 'page',
            title: 'Руїна – записки українського самашедшого',
            mix: [{ block: 'animation', mods: { state: 'flash' } }],
            content: [
                {
                    block: 'content',
                    content: json
                },
                {
                    block: 'analytics'
                }
            ]
        };
    }

});
