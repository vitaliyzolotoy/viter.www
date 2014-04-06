BEM.decl('i-auth', null, {
    login: function () {
        BEM.blocks['i-cookie'].set('auth', 1, { path: '/', expires: 20 * 365 });
        this.reload();
    },

    logout: function () {
        BEM.blocks['i-cookie'].set('auth', 0, { path: '/', expires: 20 * 365 });
        this.reload();
    },

    check: function () {
        var checkCookie = BEM.blocks['i-cookie'].get('auth') === '1';
        return checkCookie;
    },

    reload: function () {
        var uri = BEM.blocks['i-router'].getMatchers();
        BEM.blocks['i-router'].replacePath(uri);
    }

});
