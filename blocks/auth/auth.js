BEM.DOM.decl('auth', {

    onSetMod: {
        js: function () {
            var handle = this.findBlockInside('link'),
                login = this.findBlockOutside('b-page').findBlockInside({ blockName : 'dialog', modName : 'auth', modVal : 'yes' }).findBlockInside({ blockName : 'button', modName : 'auth', modVal : 'yes' }),
                logout = this.findBlockInside({ blockName : 'link', modName : 'logout', modVal : 'yes' });

            handle && this.bindTo(handle.domElem, 'click', function(e){
                this._showAuthDialog();
            });

            login && this.bindTo(login.domElem, 'click', function(e){
                this._login();
            });

            logout && this.bindTo(logout.domElem, 'click', function(e){
                this._logout();
            });

        }
    },

    _showAuthDialog: function () {
        var dialog = this.findBlockOutside('b-page').findBlockInside({ blockName : 'dialog', modName : 'auth', modVal : 'yes' });
        dialog.setMod('visible', 'yes');
    },

    _login: function () {
        BEM.blocks['i-auth'].login();
    },

    _logout: function () {
        BEM.blocks['i-auth'].logout();
    }

});
