MAKE.decl('Arch', {

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.2'
            }
        };

    }

});

MAKE.decl('BundleNode', {

    'create-priv.js-optimizer-node': function(tech, sourceNode, bundleNode) {
        var nodes = this.__base(tech, sourceNode, bundleNode);
        this.ctx.arch.link(this.getBundlePath('bemhtml.js'), nodes);
        return nodes;
    },

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml.js',
            'css',
            'ie.css',
            'js',
            'html',
            'priv.js'
        ]; 
    }

});
