({
    mustDeps: [
        { block: 'bemhtml' },
        { block: 'font' }
    ],
    shouldDeps: [
        { block: 'analytics' }
    ],
    noDeps: [
        { block: 'i-bem', elem: 'dom', mods: { init: 'auto' } },
        { block: 'i-jquery', elem: 'core' },
        { block: 'i-ua' }
    ]
})
