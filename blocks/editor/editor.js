BEM.DOM.decl('editor', {

    onSetMod: {
        js: function () {
            var that = this;

            this._data = {};

            this._data.module = 'notes';
            this._data.id = this.params.id;
            this._data.mode = this.params.create;
            this._data.published = false;

            this._timeout = {};

            this._status = this.findBlockInside('status');

            !this._data.mode && this._status.delMod('hidden');

            // Title
            this._title = this.findBlockInside('title'),

            this._title && this.bindTo(this._title.domElem, 'mouseleave', function (e) {
                e.preventDefault();
                that._getData();
                that._autosaveNote();
            });

            this._title && this.bindTo(this._title.domElem, 'input', function (e) {
                clearTimeout(that._timeout);
                that._timeout = setTimeout(function () {
                    e.preventDefault();
                    that._getData();
                    that._autosaveNote();
                }, 2000);
            });

            // Text
            this._text = this.findBlockInside('text');

            this._text && this.bindTo(this._text.domElem, 'mouseleave', function (e) {
                e.preventDefault();
                that._getData();
                that._autosaveNote();
            });

            this._text && this.bindTo(this._text.domElem, 'input', function (e) {
                clearTimeout(that._timeout);
                that._timeout = setTimeout(function () {
                    e.preventDefault();
                    that._getData();
                    that._autosaveNote();
                }, 2000);
            });

            // Publish
            this._publish = this.findBlockInside({blockName : 'button', modName : 'publish', modVal : 'yes'}),
            this._publish && this.bindTo(this._publish.domElem, 'click', function (e) {
                e.preventDefault();
                this._data.published = true;
                this._getData();
                this._publishNote();
            });

            // Confirm
            this._confirm = this.findBlockInside({blockName : 'button', modName : 'confirm', modVal : 'yes'}),

            this._confirm && this.bindTo(this._confirm.domElem, 'click', function (e) {
                e.preventDefault();
                this.findBlockInside('dialog').setMod('visible', 'yes');
            });

            // Delete
            this._del = this.findBlockInside({blockName : 'button', modName : 'delete', modVal : 'yes'});

            this._del && this.bindTo(this._del.domElem, 'click', function (e) {
                e.preventDefault();
                this._getData();
                this._deleteNote();
            });

            this._initTitle();
            this._initText();
        }
    },

    _initTitle: function () {
        var that = this;

        var iTitle = new Medium({
            element: document.getElementById('title'),
            mode: Medium.inlineMode,
            placeholder: that._title.params.placeholder
        });
    },

    _initText: function () {
        var that = this;

        var iText = new Medium({
            element: document.getElementById('text'),
            mode: Medium.richMode,
            placeholder: that._text.params.placeholder,
            tags: {
                'break': 'br',
                'horizontalRule': 'hr',
                'paragraph': 'p',
                'outerLevel': ['pre', 'blockquote', 'figure', 'ol', 'ul'],
                'innerLevel': ['a', 'b', 'u', 'i', 'img', 'strong', 'li', 'figcaption']
            }
        });

        iText.focus();
    },

    _getData: function () {
        this._data.body = {
            publish: this._data.published,
            title: this._title.domElem.html(),
            content: this._text.domElem.html(),
            chapter: {
                select: this.findBlockInside({blockName : 'chapters', modName : 'data', modVal : 'chapter-select'}).domElem.val(),
                create: this.findBlockInside({blockName : 'input', modName : 'data', modVal : 'chapter-new'}).domElem.val()
            }
        };
    },

    _autosaveNote: function () {
        var that = this;

        if (this._data.mode) {
            BEM.blocks['i-api-request'].post(this._data.module, { body: this._data.body }).then(function (result) {
                if (result.note) {
                    that._data.mode = false;
                    that._data.id =  result.note._id;
                    that._setStatus(result);
                    BEM.blocks['i-router'].setPath('/editor/' + that._data.id);
                };
                console.log(result);
                console.log('success');
            }.bind(this)).fail(function () {
                console.log(result);
                console.log('fail');
            }.bind(this));
        } else {
            BEM.blocks['i-api-request'].put(this._data.module + '/' + this._data.id, { body: this._data.body }).then(function (result) {
                if (result.note) {
                    that._setStatus(result);
                };
                console.log(result);
                console.log('success');
            }.bind(this)).fail(function () {
                console.log(result);
                console.log('fail');
            }.bind(this));
        };
    },

    _publishNote: function () {
        var that = this;

        BEM.blocks['i-api-request'].put(this._data.module + '/' + this._data.id, { body: this._data.body }).then(function (result) {
            console.log(result);
            console.log('success');
            BEM.blocks['i-router'].setPath('/notes/' + that._data.id);
            BEM.blocks['i-router'].reload();
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _deleteNote: function () {
        var that = this;

        BEM.blocks['i-api-request'].delete(this._data.module + '/' + this._data.id).then(function (result) {
            BEM.blocks['i-router'].setPath('/toc/');
            BEM.blocks['i-router'].reload();
            console.log(result);
            console.log('success');
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _setStatus: function (result) {
        var that = this;

        !this._data.mode && this._status.delMod('hidden');
        this._flash = this._status.findBlockInside('animation');
        this._flash.setMod('state', 'flash');
        this._modified = BEM.blocks['i-date'].beautify(result.note.modified);

        BEM.DOM.update(this._flash.domElem, 'збережено ' + this._modified, function () {
            clearTimeout(that._timeout);
            that._timeout = setTimeout(function () {
                console.log('700');
                that._flash.delMod('state');
            }, 700);
        });
    }

});
