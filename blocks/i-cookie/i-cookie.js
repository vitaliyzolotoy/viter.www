BEM.decl('i-cookie', null, {
    /**
     * Устанавливает куку пользователю
     */
    set: function (name, val) {
        document.cookie = this._cookieStr(name, val);
    }
});
