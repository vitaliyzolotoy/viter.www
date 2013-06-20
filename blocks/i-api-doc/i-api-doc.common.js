BEM.decl({block: 'i-api-doc'}, null, {

    index: function () {
        return BEM.blocks['i-api-request']
            .get('index.json')
            .then(function (result) {
                /**
                 * @see http://nodejs.org/api/index.json
                 */
                return result.desc.map(function (elem) {
                    var match;

                    if (!elem.text) {
                        return false;
                    }

                    // [About these Docs](documentation.html) to {text: 'About these Docs', url: 'documentation.html'}
                    match = elem.text.split('](');
                    return {
                        text: match[0].slice(1),
                        url: match[1].slice(0, -6)
                    }

                }).filter(Boolean);
            });
    },

    module: function (name) {
        return BEM.blocks['i-api-request']
            .get(name + '.json')
            .then(function (result) {

                if (result.modules && result.modules.length) {
                    return result.modules[0];
                } else if (result.globals && result.globals.length) {
                    return result.globals[0];
                }

                return Vow.reject('No module');
            });
    }
});
