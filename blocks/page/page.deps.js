({
    mustDeps: [
        { block: 'i-bem', elems: ['dom', 'json'], mods: {'init': 'auto'} }
    ],
    shouldDeps: [
        { elems: ['css', 'js'] },

        { block: 'font' },
        { block: 'link' },
        { block: 'title' },
        { block: 'content' },
        { block: 'section' },
        { block: 'aside' },
        { block: 'analytics' },
        { block: 'animation' },
        { block: 'dialog' },
        { block: 'auth-form' },

        { block: 'header' },
        { block: 'footer' }
    ]
})
