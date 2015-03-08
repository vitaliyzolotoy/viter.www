BEM.decl('i-vk', null, {
    init: function() {
        this._token = BEM.blocks['i-router'].getHashVal('access_token');
        this._userId = BEM.blocks['i-router'].getHashVal('user_id');

        if (this._userId) {
            BEM.blocks['i-cookie'].set('vkUser', this._userId, { path: '/', expires: 20 * 365 });
        }

        if (this._token) {
            BEM.blocks['i-cookie'].set('vkToken', this._token, { path: '/', expires: 20 * 365 });

            return;
        }

        this._token = BEM.blocks['i-cookie'].get('vkToken');
        this._userId = BEM.blocks['i-cookie'].get('vkUser');
    },

    login: function() {
        var urlParams = [
            'client_id=4587452',
            'scope=8194',
            'redirect_uri=' + BEM.blocks['i-config'].redirectUri,
            'display=popup',
            'v=5.25',
            'response_type=token'
        ],
        _authHost = 'https://oauth.vk.com/authorize?',
        url = _authHost + urlParams.join('&'),
        winLeft = ($(document).width() / 2) - 300;

        this._authWindow = window.open(url, 'Vk auth','menubar=no, location=no, resizable=no,scrollbars=no ,status=no, width=600, height=400, top=200,left=' + winLeft);

        this._checkAuthInterval = setInterval(function() {
            this._checkAuth();
        }.bind(this), 100);
    },

    isAuth: function() {
        return this._token ? true : false;
    },

    _checkAuth: function() {
        this._token = BEM.blocks['i-cookie'].get('vkToken');

        (this._token && this._authWindow) && this._onAuth();
    },

    _onAuth: function() {
        clearInterval(this._checkAuthInterval);
        this._authWindow.close();
        BEM.blocks['i-router'].setPath('/toc/');
        BEM.blocks['i-router'].reload();
    },

    logout: function() {
        this._token = null;
        this._clearCookie();
        BEM.blocks['i-router'].setPath('/toc/', true);
        BEM.blocks['i-router'].reload();
    },

    _clearCookie: function() {
        BEM.blocks['i-cookie'].set('vkToken', null, { path: '/', expires: 20 * 365 });
        BEM.blocks['i-cookie'].set('vkUser', null, { path: '/', expires: 20 * 365 });
    }
});
