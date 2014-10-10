BEM.DOM.decl('editor', {

    onSetMod: {
        js: function () {
            var create = this.findBlockInside({ blockName : 'button', modName : 'create', modVal : 'yes' }),
                update = this.findBlockInside({ blockName : 'button', modName : 'update', modVal : 'yes' }),
                confirm = this.findBlockInside({ blockName : 'button', modName : 'confirm', modVal : 'yes' }),
                del = this.findBlockInside({ blockName : 'button', modName : 'delete', modVal : 'yes' }),
                media = this.findBlockInside({ blockName : 'input', modName : 'media', modVal : 'yes' });

            create && this.bindTo(create.domElem, 'click', function(e) {
                e.preventDefault();
                data = this._getData();
                this._createNote(data);
            });

            update && this.bindTo(update.domElem, 'click', function(e) {
                e.preventDefault();
                data = this._getData();
                this._updateNote(data);
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

            media && this.bindTo(media.domElem, 'change', function(e) {
                var files = e.target.files;
                this._uploadMedia(files);
            });

            var e_title = new Medium({
                element: document.getElementById('title'),
                mode: Medium.inlineMode,
                placeholder: 'Тема'
            });

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

        }
    },

    _getData: function () {
        var data = {},
            id = $('.form input[name=id]').val() || '',
            title = $('.form .title').html() || '',
            content = $('.form .text').html() || '',
            chapter = $('.form input[name=chapter]').val() || '',
            chapterSelect = $('.form select[name=chapter-select]').val() || '',
            chapterCreate = $('.form input[name=chapter-new]').val() || '';
        data.module = 'notes';
        data.id = id;
        data.body = {
            title: title,
            content: content,
            chapter: {
                select: chapterSelect,
                create: chapterCreate
            }
        };
        console.log(data);
        return data;
    },

    _createNote: function () {
        BEM.blocks['i-api-request'].post(data.module, { body: data.body }).then(function (result) {
            console.log('success');
            BEM.blocks['i-router'].setPath('/notes/' + result.note._id);
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _updateNote: function () {
        BEM.blocks['i-api-request'].put(data.module + '/' + data.id, { body: data.body }).then(function (result) {
            console.log('success');
            BEM.blocks['i-router'].setPath('/notes/' + data.id);
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _deleteNote: function () {
        BEM.blocks['i-api-request'].delete(data.module + '/' + data.id).then(function (result) {
            BEM.blocks['i-router'].setPath('/toc/');
            console.log('success');
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _uploadMedia: function (files) {
    }

});
