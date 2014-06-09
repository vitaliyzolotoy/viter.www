BEM.DOM.decl('postify', {

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

        }
    },

    _getData: function () {
        var data = {},
            id = $('.form input[name=id]').val() || '',
            title = $('.form input[name=title]').val() || '',
            content = $('.form textarea[name=content]').val() || '',
            tags = $('.form input[name=tags]').val() || '';

        data.module = 'notes';
        data.id = id;
        data.body = {
            title: title,
            content: content,
            tags: tags
        };

        return data;
    },

    _createNote: function () {
        BEM.blocks['i-api-request'].post(data.module, { body: data.body }).then(function (result) {
            console.log('success');
            BEM.blocks['i-router'].setPath('/notes/');
        }.bind(this)).fail(function () {
            console.log('fail');
        }.bind(this));
    },

    _updateNote: function (data) {
        BEM.blocks['i-api-request'].put(data.module + '/' + data.id, { body: data.body }).then(function (result) {
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
    },

    _uploadMedia: function (files) {

        // console.log(files);



    // Variable to store your files
    // var files;

    // Add events
    // $('input[type=file]').on('change', prepareUpload(event));
    $('form').on('submit', uploadFiles);

    // Grab the files and set them to our variable
    // function prepareUpload(event)
    // {
    //     console.log(files);
    //     files = event.target.files;
    // }

    // Catch the form submit and upload the files
    function uploadFiles(event)
    {
        console.log(files);
        event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        // START A LOADING SPINNER HERE

        // Create a formdata object and add the files
        var data = new FormData();
        $.each(files, function(key, value)
        {
            data.append('key', value);
        });

        console.log(files[0]);

        $.ajax({
            url: 'http://localhost:4000/media',
            type: 'POST',
            data: files[0],
            cache: false,
            dataType: 'json',
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function(data, textStatus, jqXHR)
            {
                console.log('sc');
                if(typeof data.error === 'undefined')
                {
                    // Success so call function to process the form
                    submitForm(event, data);
                }
                else
                {
                    // Handle errors here
                    console.log('ERRORS: ' + data.error);
                }
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
                console.log(jqXHR);
                console.log(errorThrown);
                // Handle errors here
                console.log('ERRORS: ' + textStatus);
                // STOP LOADING SPINNER
            }
        });
    }

    function submitForm(event, data)
    {
        // Create a jQuery object from the form
        $form = $(event.target);

        // Serialize the form data
        var formData = $form.serialize();

        // You should sterilise the file names
        $.each(data.files, function(key, value)
        {
            formData = formData + '&filenames[]=' + value;
        });

        $.ajax({
            url: 'http://localhost:4000/media',
            type: 'POST',
            data: formData,
            cache: false,
            dataType: 'json',
            success: function(data, textStatus, jqXHR)
            {
                if(typeof data.error === 'undefined')
                {
                    // Success so call function to process the form
                    console.log('SUCCESS: ' + data.success);
                }
                else
                {
                    // Handle errors here
                    console.log('ERRORS: ' + data.error);
                }
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
                // Handle errors here
                console.log('ERRORS: ' + textStatus);
            },
            complete: function()
            {
                // STOP LOADING SPINNER
            }
        });
    }



















        // var file = $('.form input[name=media]').val() || '';
        // BEM.blocks['i-upload'].file('yo')

        // BEM.blocks['i-api-request'].post('storage', { params:{p1:'formData'}, body:'formData', files:{f1:formData} }).then(function (result) {
        //     console.log('success');
        // }.bind(this)).fail(function () {
        //     console.log('fail');
        // }.bind(this));

    }

});
