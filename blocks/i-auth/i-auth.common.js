BEM.decl('i-auth', null, {
    login: function () {
        BEM.blocks['i-cookie'].set('auth', 1);
    },

    check: function () {
        var checkCookie = BEM.blocks['i-cookie'].get('auth') === '1';
        return checkCookie;
    },

    logout: function () {
        BEM.blocks['i-cookie'].set('auth', 0);
    }

});
