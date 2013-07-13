module.exports = function(config) {
    config.mode("development", function() {
        config.node("pages/index", function(nodeConfig) {
            nodeConfig.addTechs([
                [ require("enb/techs/file-copy"), { sourceTarget: "?.js", destTarget: "_?.js" } ],
                [ require("enb/techs/file-copy"), { sourceTarget: "?.css", destTarget: "_?.css" } ]
            ]);
        });
    });
    config.mode("production", function() {
        config.node("pages/index", function(nodeConfig) {
            nodeConfig.addTechs([
                [ require("enb/techs/borschik"), { sourceTarget: "?.js", destTarget: "_?.js", minify: true, freeze: true } ],
                [ require("enb/techs/borschik"), { sourceTarget: "?.css", destTarget: "_?.css", minify: true, freeze: true } ]
            ]);
        });
    });

    config.node("pages/index", function(nodeConfig) {
        nodeConfig.addTechs([
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            [ require("enb/techs/file-provider"), { target: "?.bemdecl.js" } ],
            require("enb/techs/deps-old"),
            require("enb/techs/files"),
            require("enb/techs/js"),
            require("enb/techs/css"),

            require("enb-bemhtml/techs/bemhtml"),
            require("../.bem/techs/server"),
            require("../.bem/techs/priv"),
            // require("../.bem/techs/js")
        ]);
        nodeConfig.addTargets([
            "_?.js",
            "_?.css",
            "?.bemhtml.js",
            "?.server.js",
            "?.priv.js",
            // "?.js"
        ]);

        function getLevels() {
            return [
                {"path":"node_modules/bem-node/node_modules/bem-bl/blocks-common","check":true},
                {"path":"node_modules/bem-node/node_modules/bem-bl/blocks-desktop","check":true},
                {"path":"node_modules/bem-node/node_modules/bem-json","check":true},
                {"path":"node_modules/bem-node/blocks","check":true},
                {"path":"blocks","check":true}
            ].map(function(l) { return config.resolvePath(l); });
        }
    });
}
