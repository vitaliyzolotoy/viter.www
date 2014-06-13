BEM.blocks['i-router'].define(/^\/map\/?$/, 'i-page-map');

BEM.decl({block: 'i-page-map', baseBlock: 'i-page'}, null, {
    init: function (matchers) {
        return this
            .addToHead('<script src="http://d3js.org/d3.v3.min.js"></script>')
            .addToHead('<script src="http://d3js.org/topojson.v1.min.js"></script>')
            .out({
                block: 'map',
                module: 'map'
            });
    }
});
