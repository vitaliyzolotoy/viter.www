BEM.blocks['i-router'].define('/', 'i-page-landing');

BEM.decl({block: 'i-page-landing', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .setTitle('Руїна – записки українського самашедшого')
            .out({
                block: 'landing',
                module: 'landing'
            });
    }
});
