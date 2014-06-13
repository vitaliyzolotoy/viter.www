BEM.DOM.decl('map', {

    onSetMod: {
        js: function () {
            this._drawMap();

        }
    },

    _drawMap: function () {
        var width = 940,
            height = 650,
            geometry_center =  {'latitude': 48.360833, 'longitude': 31.1809725},
            geography_center = {'latitude': 49.0275, 'longitude': 31.482778};

        var svg = d3.select('.map').append('svg').attr('width', width).attr('height', height);

        d3.json('../blocks/map/map.json', function(error, ukraine_data) {
            var projection = d3.geo.conicEqualArea()
                .center([0, geometry_center.latitude])
                .rotate([-geometry_center.longitude, 0])
                .parallels([46, 52])  // vsapsai: selected these parallels myself, most likely they are wrong.
                .scale(4500)
                .translate([width / 2, height / 2]);
            var path = d3.geo.path()
                .projection(projection);

            var countries = topojson.feature(ukraine_data, ukraine_data.objects.countries);
            svg.selectAll('.country')
                .data(countries.features)
              .enter().append('path')
                .attr('class', function(d) { return 'country ' + d.id; })
                .attr('d', path);

            var regions = topojson.feature(ukraine_data, ukraine_data.objects.regions);
            // -- areas
            svg.selectAll('.region')
                .data(regions.features)
              .enter().append('path')
                .classed('region', true)
                .attr('class', function(d) { return 'region ' + d.id; })
                .attr('d', path);
            // -- boundaries
            svg.append('path')
                .datum(topojson.mesh(ukraine_data, ukraine_data.objects.regions, function(a, b) { return a !== b; }))
                .classed('region-boundary', true)
                .attr('d', path);

        });

    }

});
