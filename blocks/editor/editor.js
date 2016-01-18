BEM.DOM.decl('editor', {
    onSetMod: {
        js: function () {
            var _this = this;

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
                clearTimeout(_this._timeout);
                _this._timeout = setTimeout(function () {
                    event.preventDefault();
                    _this._getData();
                    _this._autosaveNote();
                }, 100);
            });

            // Text
            this._text = this.findBlockInside('text');

            this._text && this.bindTo(this._text.domElem, 'selectstart focusin focusout click', function (event) {
                if (this._text.domElem.text() === '') {
                    this._text.domElem.html('<p> </p>');
                };
                clearTimeout(_this._timeout);
                _this._timeout = setTimeout(function () {
                    event.preventDefault();
                    _this._showToolbar(event);
                }, 500);
            });

            this._text && this.bindTo(this._text.domElem, 'input', function (event) {
                clearTimeout(_this._timeout);
                _this._timeout = setTimeout(function () {
                    event.preventDefault();
                    _this._getData();
                    _this._autosaveNote();
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

            // Upload
            this._upload();
        }
    },

    _getData: function () {
        var _this = this;

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
        var _this = this;

        if (this._data.mode) {
            BEM.blocks['i-api-request'].post(this._data.module, { body: this._data.body }).then(function (result) {
                if (result.note) {
                    _this._data.mode = false;
                    _this._data.id =  result.note._id;
                    _this._data.modified = result.note.modified;
                    _this._setStatus();
                    BEM.blocks['i-router'].setPath('/editor/' + _this._data.id);
                };
            }.bind(this)).fail(function () {
                console.log(result);
                console.log('fail');
            }.bind(this));
        } else {
            BEM.blocks['i-api-request'].put(this._data.module + '/' + this._data.id, { body: this._data.body }).then(function (result) {
                if (result.note) {
                    _this._data.modified = result.note.modified;
                    _this._setStatus();
                };
            }.bind(this)).fail(function () {
                console.log(result);
                console.log('fail');
            }.bind(this));
        };
    },

    _publishNote: function () {
        var _this = this;

        BEM.blocks['i-api-request'].put(this._data.module + '/' + this._data.id, { body: this._data.body }).then(function (result) {
            BEM.blocks['i-router'].setPath('/notes/' + _this._data.id);
            BEM.blocks['i-router'].reload();
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _deleteNote: function () {
        var _this = this;

        BEM.blocks['i-api-request'].delete(this._data.module + '/' + this._data.id).then(function (result) {
            BEM.blocks['i-router'].setPath('/toc/');
            BEM.blocks['i-router'].reload();
        }.bind(this)).fail(function () {
            console.log(result);
            console.log('fail');
        }.bind(this));
    },

    _setStatus: function () {
        var _this = this;

        !this._data.mode && this._status.delMod('hidden');
        this._flash = this._status.findBlockInside('animation');
        this._flash.setMod('state', 'flash');

        BEM.DOM.update(this._flash.domElem, 'збережено ' + BEM.blocks['i-global'].timeAgo(this._data.modified), function () {
            clearTimeout(_this._timeout);
            _this._timeout = setTimeout(function () {
                _this._flash.delMod('state');
            }, 700);
        });
    },

    _showToolbar: function (event) {
        var _this = this;

        this._selection = window.getSelection().toString();
        this._position = {
            top: event.clientY,
            left: event.clientX,
        }

        if (this._selection != '') {
            $(this._toolbar.domElem).css('top', this._position.top + 'px')
            $(this._toolbar.domElem).css('left', this._position.left + 'px')
            this._toolbar.setMod('visible', 'yes');
        } else {
            this._toolbar.delMod('visible');
        };

    },

    _upload: function (argument) {
        var _this = this;

        var holder = document.getElementById('text'),
            acceptedTypes = {
              'image/png': true,
              'image/jpeg': true,
              'image/gif': true
            };

        holder.ondrop = function (e) {
            e.preventDefault();
            readfiles(e.dataTransfer.files);
        }

        function readfiles(files) {
            var formData = new FormData();

            for (var i = 0; i < files.length; i++) {
                formData.append('file', files[i]);
                previewfile(files[i]);
            };
        }

        function previewfile(file) {
            if (acceptedTypes[file.type] === true) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    var image = new Image();
                    image.src = event.target.result;
                    image.onload = function() {
                        image.width = this.width;
                        image.height = this.height;
                    };
                    holder.appendChild(image);
                    BEM.blocks['i-api-request'].post('upload', { body: { file: event.target.result, type: file.type}}).then(function (result) {
                        image.src = result.url;
                        _this._getData();
                        _this._autosaveNote();
                        console.log('success');
                    }.bind(this)).fail(function () {
                        console.log('fail');
                    }.bind(this));
                    };
                reader.readAsDataURL(file);
            };
        }

    }
});
