BEM.JSON.decl({name: 'notes'}, {
    onBlock: function(ctx) {
        var data = ctx.param('module');
        ctx.defer(
            BEM.blocks['i-api-request']
            .get(data)
            .then(function(result) {
                ctx.content([
                    BEM.blocks['i-page'].setTitle('Зміст | Блоґ Віталія Золотого'),
                    {
                        block: 'header'
                    },
                    {
                        block: 'section',
                        content: [
                            {
                                block: 'title',
                                tag: 'h2',
                                content: result.notes ? 'Зміст' : 'Тут порожньо'
                            },
                            {
                                block: 'toc',
                                content: result.notes && [
                                    result.notes.map(function(item) {
                                        return {
                                            elem: 'item',
                                            content: [
                                                {
                                                    block: 'link',
                                                    url: '/notes/' + item._id,
                                                    content: item.title
                                                },
                                                {
                                                    block: 'time',
                                                    attrs: { pubdate: '', datetime: item.modified },
                                                    content: [
                                                        ' ',
                                                        (item.created < item.modified) ? 'оновлено' : 'написано',
                                                        ' ',
                                                        BEM.blocks['i-date'].beautify(item.modified)
                                                    ]
                                                }
                                            ]
                                        };
                                    }),
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            url: '/',
                                            content: 'Чільна'
                                        }
                                    },
                                    // {
                                    //     elem: 'item',
                                    //     content: {
                                    //         block: 'link',
                                    //         url: '#',
                                    //         content: 'Вступ'
                                    //     }
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2'
                                    //         },
                                    //         {
                                    //             block: 'title',
                                    //             tag: 'h3',
                                    //             content: 'Ритм та пропорція'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1'
                                    //         },
                                    //         {
                                    //             block: 'title',
                                    //             tag: 'h4',
                                    //             content: 'Горизонтальний ритм'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.1'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Визначити слово простору під розмір та природних letterfit шрифту'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.2'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Виберіть зручні виміру'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.3'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Набір обірваний, якщо обірвані Налаштування костюми текст сторінки'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.4'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Використання єдиного слова простору між пропозиціями'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.5'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Додати невелику або ніяке простір усередині рядка ініціали'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.6'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Letterspace всі рядки столиць і капітелі, і всі довгі рядки цифр'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.7'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Не letterspace нижньому регістрі без причини'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.8'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Керн послідовно і незначно або взагалі не'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.9'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Не змінювати ширину або накреслення літер без причини'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.10'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Не розтягувати простір, поки не влазить'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.2'
                                    //         },
                                    //         {
                                    //             block: 'title',
                                    //             tag: 'h4',
                                    //             content: 'Вертикальний ритм'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.2.1'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Вибрати один з основних провідних і відповідний шрифт, текст і вимірювання'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.1.2'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Додати і видалити вертикальне простір вимірюваних інтервалів'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.3'
                                    //         },
                                    //         {
                                    //             block: 'title',
                                    //             tag: 'h4',
                                    //             content: 'Блоки та параграфи'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.3.1'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Набір вступних абзаців, вирівнювання по лівій межі'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.3.2'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'В суцільний текст відзначити всі пункти після першого з відступу, принаймні, одна ванна'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.3.3'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Додати додаткові вести до і після цитат'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.3.4'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Відступ або центр вірш котирувань'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.4'
                                    //         },
                                    //         {
                                    //             block: 'title',
                                    //             tag: 'h4',
                                    //             content: 'Етикет переносів та нумерації'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.4.1'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'У переноси рядків-решт, залишити принаймні два символи позаду, і прийняти принаймні три вперед'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.4.2'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Уникнути більш ніж на три послідовних переносів'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.4.3'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Переноси слів у відповідності з правилами мови'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.4.4'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Посилання короткий і чисельні математичні вирази з жорсткого просторів'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '2.4.5'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Ніколи не починайте сторінка з останнього рядка multi-рядок абзацу'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '3'
                                    //         },
                                    //         {
                                    //             block: 'title',
                                    //             tag: 'h3',
                                    //             content: 'Гармонія та контрапункт'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '3.1'
                                    //         },
                                    //         {
                                    //             block: 'title',
                                    //             tag: 'h4',
                                    //             content: 'Розмір'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '3.1.1'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Не писати без шкали'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '3.2'
                                    //         },
                                    //         {
                                    //             block: 'title',
                                    //             tag: 'h4',
                                    //             content: 'Цифри, букви та капітелі'
                                    //         }
                                    //     ]
                                    // },
                                    // {
                                    //     elem: 'item',
                                    //     content: [
                                    //         {
                                    //             elem: 'section',
                                    //             content: '3.2.1'
                                    //         },
                                    //         {
                                    //             block: 'link',
                                    //             url: '#',
                                    //             content: 'Використовуйте заголовки цифри з повним шапки, цифри і текст у всіх інших випадках'
                                    //         }
                                    //     ]
                                    // }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'footer'
                    }
                ]);
            })
        );
    }
});
