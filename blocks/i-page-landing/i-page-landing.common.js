BEM.blocks['i-router'].define('/', 'i-page-landing');
BEM.decl({block: 'i-page-landing', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({block: 'b-landing'});
    }

});
