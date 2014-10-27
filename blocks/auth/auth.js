BEM.DOM.decl('auth', {
    onSetMod: {
        js: {
            inited: function () {
                BEM.blocks['i-vk'].init();

                this._handle = this.findBlockInside('link');
                this._login = this._handle.hasMod('login');
                this._logout = this._handle.hasMod('logout');

                this._login && this.bindTo(this._handle.domElem, 'click', function(e) {
                    e.preventDefault();
                    BEM.blocks['i-vk'].login();
                    return false;
                });

                this._logout && this.bindTo(this._handle.domElem, 'click', function(e) {
                    e.preventDefault();
                    BEM.blocks['i-vk'].logout();
                    return false;
                });
            }
        }
    }
});
