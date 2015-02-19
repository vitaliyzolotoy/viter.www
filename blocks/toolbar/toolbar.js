// World Simplest HTML5 WYSIWYG Inline Editor
// http://codepen.io/barney-parker/pen/idjCG
BEM.DOM.decl('toolbar', {
    onSetMod: {
        js: function () {
            var that = this;

            this._handlers = this.findBlocksInside('link');
            this._current;

            this._handlers.map(function(item) {
                item && that.bindTo(item.domElem, 'click', function (event) {
                    event.preventDefault();
                    that._current = $(event.currentTarget);
                    that._setTag();
                });
            });
        }
    },

    _setTag: function () {
        var that = this;

        this._role = this._current.data('role');

        switch(this._role) {
            case 'h3':
            case 'h4':
            case 'p':
            case 'blockquote': document.execCommand('formatBlock', false, this._role);
            break;
            default: document.execCommand(this._role, false, null);
            break;
        };
    }
});
