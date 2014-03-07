BEM.DOM.decl('postify', {

    onSetMod: {
        js: function () {
            var create = this.findBlockInside({ blockName : 'button', modName : 'create', modVal : 'yes' }),
                update = this.findBlockInside({ blockName : 'button', modName : 'update', modVal : 'yes' }),
                confirm = this.findBlockInside({ blockName : 'button', modName : 'confirm', modVal : 'yes' }),
                del = this.findBlockInside({ blockName : 'button', modName : 'delete', modVal : 'yes' });

            create && this.bindTo(create.domElem, 'click', function(e){
                e.preventDefault();
                data = this._getData();
                this._createNote(data);
            });

            update && this.bindTo(update.domElem, 'click', function(e){
                e.preventDefault();
                data = this._getData();
                this._updateNote(data);
            });

            confirm && this.bindTo(confirm.domElem, 'click', function(e){
                e.preventDefault();
                this.findBlockInside('dialog').setMod('visible', 'yes');
            });

            del && this.bindTo(del.domElem, 'click', function(e){
                e.preventDefault();
                data = this._getData();
                this._deleteNote(data);
            });

        }
    },

    _getData: function () {
        var data = {},
            id = $('.form input[name=id]').val() || '',
            title = $('.form input[name=title]').val() || '',
            content = $('.form textarea[name=content]').val() || '';

        data.module = 'notes';
        data.id = id;
        data.params = {
            title: title,
            content: content
        };

        return data;
    },

    _createNote: function () {
        BEM.blocks['i-api-request'].post(data.module, {params: data.params}).then(function (result) {
            console.log('success');
            BEM.blocks['i-router'].setPath('/notes/');
        }.bind(this)).fail(function () {
            console.log('fail');
        }.bind(this));
    },

    _updateNote: function (data) {
        BEM.blocks['i-api-request'].put(data.module + '/' + data.id, {params: data.params}).then(function (result) {
            console.log('success');
            BEM.blocks['i-router'].setPath('/notes/' + data.id);
        }.bind(this)).fail(function () {
            console.log('fail');
        }.bind(this));
    },

    _deleteNote: function () {
        BEM.blocks['i-api-request'].delete(data.module + '/' + data.id).then(function (result) {
            BEM.blocks['i-router'].setPath('/notes/');
            console.log('success');
        }.bind(this)).fail(function () {
            console.log('fail');
        }.bind(this));
    }

});
