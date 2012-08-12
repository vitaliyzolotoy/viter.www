([
    {
        block: 'b-page',
        title: 'Бібліотека блоків · Вогняний лимонад',
        head: [
            {
                elem: 'favicon',
                url: '/favicon.ico'
            },
            {
                elem: 'css',
                url: 'index/_index.css'
            },
            {
                block: 'i-jquery',
                elem: 'core'
            },
            {
                elem: 'js',
                url: 'index/_index.js'
            }
        ],
        content: [
            {
                block: 'b-chan',
                content: ''
            },
            {
                block: 'i-server',
                content: ''
            },
            {
                block: 'grid',
                mods: { liquid: 'yes' },
                content: [
                    {
                        elem: 'unit',
                        elemMods: { liquid: '2' },
                        content: ''
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '96' },
                        content: '<h3>Модульна сітка</h3> <p>Тут буде інформація про блок grid  </p>'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '2' },
                        content: ''
                    }
                ]
            },
            {
                block: 'grid',
                mods: { elastic: 'yes', fixed: 'yes', liquid: 'yes' },
                mix: [{ block: 'debug' }],
                content: [
                    {
                        elem: 'unit',
                        elemMods: { liquid: '2' },
                        content: ''
                    },
                    {
                        elem: 'unit',
                        elemMods: { fixed: '120' },
                        content: 'Комірка, фіксована, 120px'
                    },
                    {
                        elem: 'unit',
                        elemMods: { elastic: '9' },
                        content: 'Комірка, еластична, 9em'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '48' },
                        content: 'Комірка, резинова, 48%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '32' },
                        content: 'Комірка, резинова, 32%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '16' },
                        content: 'Комірка, резинова, 16%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '2' },
                        content: ''
                    }
                ]
            },
            {
                block: 'grid',
                mods: { elastic: 'yes', fixed: 'yes', liquid: 'yes' },
                mix: [{ block: 'debug' }],
                content: [
                    {
                        elem: 'unit',
                        elemMods: { liquid: '2' },
                        content: ''
                    },
                    {
                        elem: 'unit',
                        elemMods: { fixed: '120' },
                        content: 'Комірка, фіксована, 120px'
                    },
                    {
                        elem: 'unit',
                        elemMods: { elastic: '9' },
                        content: 'Комірка, еластична, 9em'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '24' },
                        content: 'Комірка, резинова, 24%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '24' },
                        content: 'Комірка, резинова, 24%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '16' },
                        content: 'Комірка, резинова, 16%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '16' },
                        content: 'Комірка, резинова, 16%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '8' },
                        content: 'Комірка, резинова, 8%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '8' },
                        content: 'Комірка, резинова, 8%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '2' },
                        content: ''
                    }
                ]
            },
            {
                block: 'grid',
                mods: { elastic: 'yes', fixed: 'yes', liquid: 'yes' },
                mix: [{ block: 'debug' }],
                content: [
                    {
                        elem: 'unit',
                        elemMods: { liquid: '2' },
                        content: ''
                    },
                    {
                        elem: 'unit',
                        elemMods: { fixed: '120' },
                        content: 'Комірка, фіксована, 120px'
                    },
                    {
                        elem: 'unit',
                        elemMods: { elastic: '9' },
                        content: 'Комірка, еластична, 9em'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '12' },
                        content: 'Комірка, резинова, 12%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '12' },
                        content: 'Комірка, резинова, 12%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '12' },
                        content: 'Комірка, резинова, 12%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '12' },
                        content: 'Комірка, резинова, 12%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '48' },
                        content: 'Комірка, резинова, 48%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '2' },
                        content: ''
                    }
                ]
            },
            {
                block: 'grid',
                mods: { ratio: 'yes' },
                mix: [{ block: 'debug' }],
                content: [
                    {
                        elem: 'unit',
                        elemMods: { liquid: '62' },
                        content: 'Комірка, резинова, 61.8%'
                    },
                    {
                        elem: 'unit',
                        elemMods: { liquid: '38' },
                        content: 'Комірка, резинова, 38.2%'
                    }
                ]
            }
        ]
    }
])
