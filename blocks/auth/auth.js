BEM.DOM.decl('auth', {

    onSetMod: {
        js: function () {
            var login = this.findBlockInside({ blockName : 'link', modName : 'login', modVal : 'yes' }),
                logout = this.findBlockInside({ blockName : 'link', modName : 'logout', modVal : 'yes' }),
                confirm = this.findBlockOutside('b-page').findBlockInside({ blockName : 'dialog', modName : 'auth', modVal : 'yes' }).findBlockInside({ blockName : 'button', modName : 'confirm', modVal : 'yes' }),
                dialog = this.findBlockOutside('b-page').findBlockInside({ blockName : 'dialog', modName : 'auth', modVal : 'yes' }),
                email = dialog.findBlockInside({ blockName : 'input', modName : 'email', modVal : 'yes' }),
                password = dialog.findBlockInside({ blockName : 'input', modName : 'password', modVal : 'yes' }),
                animate = dialog.findBlockInside({ blockName: 'animation' });

            login && this.bindTo(login.domElem, 'click', function(e) {
                dialog.setMod('visible', 'yes');
                animate.setMod('state', 'scale')
            });

            confirm && this.bindTo(confirm.domElem, 'click', function(e) {
                var data = {};
                data.email = email.domElem.val(),
                data.password = password.domElem.val();

                if (this._validateEmail(data.email)) {
                    dialog.delMod('visible');
                    this._login();
                } else {
                    animate.setMod('state', 'shake');
                    email.setMod('state', 'danger');
                    password.setMod('state', 'danger');
                };

            });

            logout && this.bindTo(logout.domElem, 'click', function(e) {
                this._logout();
            });

        }
    },

    _validateEmail: function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    },

    _validatePassword: function () {
    },

    _login: function () {
        var data = {};
        data.email = $('input[name="email"]').val(),
        data.password = $('input[name="password"]').val();
        BEM.blocks['i-auth'].login(data);
    },

    _logout: function () {
        BEM.blocks['i-auth'].logout();
    }

});
