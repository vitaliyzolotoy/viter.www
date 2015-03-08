/**
 * Includes <head/> static files on page
 */
(function () {
    var cwd = process.cwd(),
        prefix = process.argv[1].replace(/(\.\w+)+$/, '')
            .replace(cwd, ''),
        push = [].push;

        if (process.env['YENV'] == 'production') {
            prefix = prefix.replace(/(\w+)$/, '_$1');
        };

    /**
     * Includes <head/> static files on page
     */
    BEM.JSON.decl('page', {
        onBlock: function (ctx) {
            ctx.param('head', []);

            push.apply(ctx.param('head'), [
                { elem: 'css', url: prefix + '.css', ie: false},
                { block: 'i-jquery', elem: 'core' },
                { elem: 'js', url: prefix + '.js' }
            ]);
        }
    });
}());
