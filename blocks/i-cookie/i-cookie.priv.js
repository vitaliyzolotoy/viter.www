BEM.decl('i-cookie', null, {
    /**
     * Устанавливает куку пользователю
     */
    set: function (name, val) {
        BEM.blocks['i-router'].get('res').setHeader('Set-Cookie', this._cookieStr(name, val));
    }
});
