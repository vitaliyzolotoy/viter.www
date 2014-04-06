BEM.DOM.decl('auth', {

    onSetMod: {
        js: function () {
            var login = this.findBlockInside({ blockName : 'link', modName : 'login', modVal : 'yes' }),
                logout = this.findBlockInside({ blockName : 'link', modName : 'logout', modVal : 'yes' }),
                confirm = this.findBlockOutside('b-page').findBlockInside({ blockName : 'dialog', modName : 'auth', modVal : 'yes' }).findBlockInside({ blockName : 'button', modName : 'confirm', modVal : 'yes' }),
                dialog = this.findBlockOutside('b-page').findBlockInside({ blockName : 'dialog', modName : 'auth', modVal : 'yes' });

            login && this.bindTo(login.domElem, 'click', function(e){
                dialog.setMod('visible', 'yes');
            });

            confirm && this.bindTo(confirm.domElem, 'click', function(e){
                this._login();
                dialog.delMod('visible');
            });

            logout && this.bindTo(logout.domElem, 'click', function(e){
                this._logout();
            });

        }
    },

    _login: function () {
        BEM.blocks['i-auth'].login();
    },

    _logout: function () {
        BEM.blocks['i-auth'].logout();
    }

});
