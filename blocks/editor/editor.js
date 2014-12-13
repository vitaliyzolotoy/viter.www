BEM.DOM.decl('editor', {

    onSetMod: {
        js: function () {
            var that = this;

            this._mode = this.params.create;
            this._id = this.params.id;
            this._public = false;

            this._timeout = {};

            this._status1 = this.findBlockInside('time');

            var publish = this.findBlockInside({ blockName : 'button', modName : 'publish', modVal : 'yes' }),
                confirm = this.findBlockInside({ blockName : 'button', modName : 'confirm', modVal : 'yes' }),
                del = this.findBlockInside({ blockName : 'button', modName : 'delete', modVal : 'yes' });

            var title = this.findBlockInside('title'),
                text = this.findBlockInside('text');

            title && this.bindTo(title.domElem, 'mouseleave', function(e) {
                e.preventDefault();
                data = that._getData();
                that._autosaveNote(data);
            });

            title && this.bindTo(title.domElem, 'input', function(e) {
                clearTimeout(that._timeout);
                that._timeout = setTimeout(function () {
                    e.preventDefault();
                    data = that._getData();
                    that._autosaveNote(data);
                }, 4000);
            });

            text && this.bindTo(text.domElem, 'mouseleave', function(e) {
                e.preventDefault();
                data = this._getData();
                this._autosaveNote(data);
            });

            text && this.bindTo(text.domElem, 'input', function(e) {
                clearTimeout(that._timeout);
                that._timeout = setTimeout(function () {
                    e.preventDefault();
                    data = that._getData();
                    that._autosaveNote(data);
                }, 4000);
            });

            publish && this.bindTo(publish.domElem, 'click', function(e) {
                e.preventDefault();
                that._public = true;
                data = this._getData();
                this._publishNote(data);
            });

            confirm && this.bindTo(confirm.domElem, 'click', function(e) {
                e.preventDefault();
                this.findBlockInside('dialog').setMod('visible', 'yes');
            });

            del && this.bindTo(del.domElem, 'click', function(e) {
                e.preventDefault();
                data = this._getData();
                this._deleteNote(data);
            });

            this._initTitle();
            this._initText();
        }
    },

    _initTitle: function () {
        var e_title = new Medium({
            element: document.getElementById('title'),
            mode: Medium.inlineMode,
            placeholder: 'Тема'
        });
    },

    _initText: function () {
        var e_text = new Medium({
            element: document.getElementById('text'),
            mode: Medium.richMode,
            placeholder: 'А тут, власне, повний текст замітки…',
            tags: {
                'break': 'br',
                'horizontalRule': 'hr',
                'paragraph': 'p',
                'outerLevel': ['pre', 'blockquote', 'figure', 'ol', 'ul'],
                'innerLevel': ['a', 'b', 'u', 'i', 'img', 'strong', 'li', 'figcaption']
            }
        });

        e_text.focus();
    },

    _getData: function () {
        var data = {},
            title = $('.form .title').html() || '',
            content = $('.form .text').html() || '',
            chapter = $('.editor input[name=chapter]').val() || '',
            chapterSelect = $('.editor select[name=chapter-select]').val() || '',
            chapterCreate = $('.editor input[name=chapter-new]').val() || '';
        data.module = 'notes';
        data.id = this._id;
        data.body = {
            publish: this._public,
            title: title,
            content: content,
            chapter: {
                select: chapterSelect,
                create: chapterCreate
            }
        };
        return data;
    },

    _autosaveNote: function (data) {
        var that = this;

        if (this._mode) {
            BEM.blocks['i-api-request'].post(data.module, { body: data.body }).then(function (result) {
                if (result.note) {
                    that._mode =  false;
                    that._id =  result.note._id;
                };
                that._status(result);
                console.log(result);
                console.log('success');
            }.bind(this)).fail(function () {
                console.log(result);
                console.log('fail');
            }.bind(this));
        } else {
            BEM.blocks['i-api-request'].put(data.module + '/' + that._id, { body: data.body }).then(function (result) {
                that._status(result);
                console.log(result);
                console.log('success');
            }.bind(this)).fail(function () {
                console.log(result);
                console.log('fail');
            }.bind(this));
        };
    },

    _publishNote: function (data) {
        var that = this;

        BEM.blocks['i-api-request'].put(data.module + '/' + that._id, { body: data.body }).then(function (result) {
            console.log(result);
            console.log('success');
            BEM.blocks['i-router'].setPath('/notes/' + that._id);
            BEM.blocks['i-router'].reload();
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _deleteNote: function (data) {
        var that = this;

        BEM.blocks['i-api-request'].delete(data.module + '/' + that._id).then(function (result) {
            BEM.blocks['i-router'].setPath('/toc/');
            BEM.blocks['i-router'].reload();
            console.log(result);
            console.log('success');
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _status: function (result) {
        var that = this;

        this._flash = this._status1.findBlockOn('animation');
        this._flash.setMod('state', 'flash');

        this._modified = BEM.blocks['i-date'].beautify(result.note.modified);

        BEM.DOM.update(this._status1.domElem, 'збережено ' + this._modified, function () {
            clearTimeout(that._timeout);
            that._timeout = setTimeout(function () {
                console.log('700');
                that._flash.delMod('state');
            }, 700);
        });
    }

});
