BEM.decl('i-vk', null, {
    isAuth: function() {
        this._token = BEM.blocks['i-cookie'].get('vkToken');
        return this._token ? true : false;
    }
});
