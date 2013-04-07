/*global MAKE:true */

"use strict";

//process.env.YENV = 'production';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,

    bundlesLevelsRegexp: /^.+?\.bundles$/,

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            },
            'bemhtml' : {
                type: 'git',
                url: 'git://github.com/bem/bemhtml.git'
            }
        };

    }

});


MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'css',
            'html',

            'ctrl.js',
            'mdl.js',
            'priv.js'
        ];
    },

    'create-priv.js-optimizer-node': function(tech, sourceNode, bundleNode) {
        var nodes = this.__base(tech, sourceNode, bundleNode);
        this.ctx.arch.link(this.getBundlePath('bemhtml.js'), nodes);
        return nodes;
    },

    'create-ctrl.js-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this['create-js-optimizer-node'].apply(this, arguments);
    },

    'create-mdl.js-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this['create-js-optimizer-node'].apply(this, arguments);
    },

    getOptimizerTechs: function() {
        return [
            'css',
            'js',
            'ctrl.js',
            'mdl.js',
            'priv.js'
        ];
    }

});
