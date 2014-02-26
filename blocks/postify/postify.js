BEM.DOM.decl('postify', {

    onSetMod: {
        js: function () {
            this._handlers();
        }
    },

    _handlers: function () {

        this.findBlockInside({ blockName : 'button', modName : 'create', modVal : 'yes'}).bindTo('click', function(e) {
            e.preventDefault();
            data = this._getData();
            this._createNote(data);
        }.bind(this));

        this.findBlockInside({ blockName : 'button', modName : 'update', modVal : 'yes'}).bindTo('click', function(e) {
            e.preventDefault();
            data = this._getData();
            this._updateNote(data);
        }.bind(this));

        this.findBlockInside({ blockName : 'button', modName : 'delete', modVal : 'yes'}).bindTo('click', function(e) {
            e.preventDefault();
            data = this._getData();
            this._deleteNote(data);
        }.bind(this));

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
        }.bind(this)).fail(function () {
            console.log('fail');
        }.bind(this));
    },

    _updateNote: function (data) {
        BEM.blocks['i-api-request'].post(data.module + '/' + data.id, {params: data.params}).then(function (result) {
            console.log('success');
        }.bind(this)).fail(function () {
            console.log('fail');
        }.bind(this));
    },

    _deleteNote: function () {
        BEM.blocks['i-api-request'].delete(data.module + '/' + data.id).then(function (result) {
            console.log('success');
        }.bind(this)).fail(function () {
            console.log('fail');
        }.bind(this));
    }

});
