BEM.decl('i-router', null, {
    getHashVal: function(key) {
        var vars = location.hash.substring(1).split('&'),
            varsLength = vars.length,
            pair;

        for (var i = 0; i < varsLength; i++) {
            pair = vars[i].split('=');
            if (pair[0] == key) console.log(pair[1]);
            if (pair[0] == key) return pair[1];
        }
    }
});
