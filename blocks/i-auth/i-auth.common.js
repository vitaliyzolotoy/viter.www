BEM.decl('i-auth', null, {
    login: function (data) {
        BEM.blocks['i-cookie'].set('auth', 1, { path: '/', expires: 20 * 365 });
        this.yo(data);
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
    },

    yo: function (data) {
        BEM.blocks['i-api-request'].get('login', { body: {email:data.email,password:data.password} }).then(function (result) {
            console.log(result);
            console.log('success');
        }.bind(this)).fail(function () {
            console.log('fail');
        }.bind(this));
    }

});
