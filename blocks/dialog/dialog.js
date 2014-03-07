BEM.DOM.decl('dialog', {
    onSetMod: {
        js: function () {
            var close = this.findElem('close'),
                cancel = this.findBlockInside({ blockName : 'button', modName : 'cancel', modVal : 'yes' });

            this.bindToDoc('keydown', function(e){
                e.keyCode === 27 && this._hide();
            });

            this.bindTo(close, 'click', function(e){
                e.preventDefault();
                this._hide();
            });

            this.bindTo(cancel.domElem, 'click', function(e){
                e.preventDefault();
                this._hide();
            });

        }
    },

    _hide : function () {
        this.delMod('visible');
    }

});
