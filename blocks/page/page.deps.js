({
    mustDeps: [
        {
            block: 'i-bem',
            mods: {init: 'auto'},
            elems: ['dom', 'json']
        }
    ],
    shouldDeps: [
        {
            block: 'page',
            elems: ['css', 'js']
        },
        {block: 'font'},
        {block: 'link'},
        {block: 'title'},
        {block: 'content'},
        {block: 'section'},
        {block: 'aside'},
        {block: 'analytics'},
        {block: 'animation'},
        {block: 'dialog'},
        {block: 'auth-form'},
        {block: 'header'},
        {block: 'footer'}
    ]
})
