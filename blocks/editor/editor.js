BEM.DOM.decl('editor', {
    onSetMod: {
        js: function () {
            var that = this;

            this._data = {};

            this._data.module = 'notes';
            this._data.id = this.params.id;
            this._data.mode = this.params.create;
            this._data.published = false;
            this._data.modified = 0;

            this._timeout = {};

            this._status = this.findBlockInside('status');

            !this._data.mode && this._status.delMod('hidden');

            this._toolbar = this.findBlockInside('toolbar');

            // Title
            this._title = this.findBlockInside('title'),

            this._title && this.bindTo(this._title.domElem, 'input', function (event) {
                clearTimeout(that._timeout);
                that._timeout = setTimeout(function () {
                    event.preventDefault();
                    that._getData();
                    that._autosaveNote();
                }, 100);
            });

            // Text
            this._text = this.findBlockInside('text');

            this._text && this.bindTo(this._text.domElem, 'selectstart focusin focusout click', function (event) {
                if (this._text.domElem.text() === '') {
                    this._text.domElem.html('<p> </p>');
                };
                clearTimeout(that._timeout);
                that._timeout = setTimeout(function () {
                    event.preventDefault();
                    that._showToolbar(event);
                }, 500);
            });

            this._text && this.bindTo(this._text.domElem, 'input', function (event) {
                clearTimeout(that._timeout);
                that._timeout = setTimeout(function () {
                    event.preventDefault();
                    that._getData();
                    that._autosaveNote();
                }, 1000);
            });

            // Publish
            this._publish = this.findBlockInside({blockName : 'button', modName : 'publish', modVal : 'yes'}),
            this._publish && this.bindTo(this._publish.domElem, 'click', function (event) {
                event.preventDefault();
                this._data.published = true;
                this._getData();
                this._publishNote();
            });

            // Confirm
            this._confirm = this.findBlockInside({blockName : 'button', modName : 'confirm', modVal : 'yes'}),

            this._confirm && this.bindTo(this._confirm.domElem, 'click', function (event) {
                event.preventDefault();
                this.findBlockInside('dialog').setMod('visible', 'yes');
            });

            // Delete
            this._del = this.findBlockInside({blockName : 'button', modName : 'delete', modVal : 'yes'});

            this._del && this.bindTo(this._del.domElem, 'click', function (event) {
                event.preventDefault();
                this._getData();
                this._deleteNote();
            });
        }
    },

    _getData: function () {
        var that = this;

        this._chapters = this.findBlockInside({blockName : 'chapters', modName : 'data', modVal : 'chapter-select'});
        this._chapter = this.findBlockInside({blockName : 'input', modName : 'data', modVal : 'chapter-new'});

        this._data.body = {
            publish: this._data.published,
            title: this._title.domElem.html(),
            content: this._text.domElem.html(),
            chapter: {
                select: this._chapters && this._chapters.domElem.val(),
                create: this._chapter && this._chapter.domElem.val()
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
                    that._data.modified = result.note.modified;
                    that._setStatus();
                    BEM.blocks['i-router'].setPath('/editor/' + that._data.id);
                };
            }.bind(this)).fail(function () {
                console.log(result);
                console.log('fail');
            }.bind(this));
        } else {
            BEM.blocks['i-api-request'].put(this._data.module + '/' + this._data.id, { body: this._data.body }).then(function (result) {
                if (result.note) {
                    that._data.modified = result.note.modified;
                    that._setStatus();
                };
            }.bind(this)).fail(function () {
                console.log(result);
                console.log('fail');
            }.bind(this));
        };
    },

    _publishNote: function () {
        var that = this;

        BEM.blocks['i-api-request'].put(this._data.module + '/' + this._data.id, { body: this._data.body }).then(function (result) {
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
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _setStatus: function () {
        var that = this;

        !this._data.mode && this._status.delMod('hidden');
        this._flash = this._status.findBlockInside('animation');
        this._flash.setMod('state', 'flash');

        BEM.DOM.update(this._flash.domElem, 'збережено ' + BEM.blocks['i-global'].timeAgo(this._data.modified), function () {
            clearTimeout(that._timeout);
            that._timeout = setTimeout(function () {
                that._flash.delMod('state');
            }, 700);
        });
    },

    _showToolbar: function (event) {
        var that = this;

        this._selection = window.getSelection().toString();
        this._position = {
            top: event.clientY,
            left: event.clientX,
        }

        if (this._selection != '') {
            $(this._toolbar.domElem).css('top', this._position.top + 'px')
            $(this._toolbar.domElem).css('left', this._position.top + 'px')
            this._toolbar.setMod('visible', 'yes');
        } else {
            this._toolbar.delMod('visible');
        };

    }

});
