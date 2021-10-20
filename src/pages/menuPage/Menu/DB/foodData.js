/* eslint-disable max-len */
const foodData = [
  [
    {
      id: 1,
      name: 'Тартар',
      prise: '120',
      weight: '500г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039',
      ingredients: {авокадо: true, зелень: false, лук: true, масло: false},
    },
    {
      id: 2,
      name: 'Тунец',
      prise: '150',
      weight: '400г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6788/wide/AdobeStock_166014726_result.jpeg?1564134468',
      ingredients: {кунжут: true, белок: true, соль: true, масло: false},
    },
    {
      id: 3,
      name: 'Мидии',
      prise: '90',
      weight: '450г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6789/wide/AdobeStock_196463507_result.jpeg?1564134469',
      ingredients: {
        петрушка: true,
        соус: false,
        чеснок: true,
        шалот: true,
        томат: true,
      },
    },
    {
      id: 4,
      name: 'Креветки',
      prise: '130',
      weight: '500г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6790/wide/AdobeStock_240785620_result2.jpg?1564147840',
      ingredients: {соус: true, виски: true, мука: true, сливки: true},
    },
    {
      id: 5,
      name: 'Магуро',
      prise: '90',
      weight: '400г',
      image:
        'https://dellos-delivery.ru/upload/iblock/9d4/9d474eac4eeccbadbe68d974a1e65aed.jpg',
      ingredients: {ракушки: true, креветки: true, коньяк: true, соус: true},
    },
  ],
  [
    {
      id: 1,
      name: 'Борщ',
      prise: '100',
      weight: '400г',
      image:
        'https://dellos-delivery.ru/upload/resize_cache/iblock/6db/1000_1000_0/6db539b51c19ae13921090e7040b8b81.jpg',
      ingredients: {капуста: true, лук: true, морковь: true, говядина: true},
    },
    {
      id: 2,
      name: 'Сибирский борщ',
      prise: '550',
      weight: '400г',
      image:
        'https://dellos-delivery.ru/upload/iblock/14f/14fd17c8c5c4458150f0ab47dfb8e42c.jpg',
      ingredients: {сметана: true, картовель: true, свекла: true, лук: true},
    },
    {
      id: 3,
      name: 'Щи',
      prise: '90',
      weight: '450г',
      image:
        'https://dellos-delivery.ru/upload/iblock/2d0/2d06783776310ea30c7e5a2562aab5a3.jpg',
      ingredients: {морковь: true, чеснок: true, капуста: true},
    },
  ],
  [
    {
      id: 1,
      name: 'Кальмар гриль',
      prise: '180',
      weight: '160г',
      image:
        'https://assets.misteram.com.ua/misteram-public/79dea0539d64fd08ab6299692121c845-400x0.png',
      ingredients: {
        кальмар: true,
        сушидзу: true,
        артишок: true,
        масло: true,
        лимон: true,
      },
    },
    {
      id: 2,
      name: 'Лосось из печи',
      prise: '250',
      weight: '420г',
      image:
        'https://assets.misteram.com.ua/misteram-public/27c84bc86c4b8de16bcc03bc27075fae-400x0.png',
      ingredients: {лосось: true, огурец: true, сметана: true},
    },
    {
      id: 3,
      name: 'Сибас на гриле',
      prise: '190',
      weight: '350г',
      image:
        'https://assets.misteram.com.ua/misteram-public/2b0b1203adc13d42ed952214e49a26a8-400x0.png',
      ingredients: {оливки: true, каперсами: true, шалот: true, томат: true},
    },
    {
      id: 4,
      name: 'Стейк из лосося',
      prise: '200',
      weight: '300г',
      image:
        'https://assets.misteram.com.ua/misteram-public/37c9708302888d9eeb327f2956ffc30a-400x0.png',
      ingredients: {лук: true, ром: true, рис: true, сливки: true},
    },
    {
      id: 5,
      name: 'Креветки магаданские',
      prise: '190',
      weight: '300г',
      image:
        'https://assets.misteram.com.ua/misteram-public/92cf9d0b9c2e44be17ff21c5fb4690f3-400x0.png',
      ingredients: {креветки: true, соус: true},
    },
  ],
  [
    {
      id: 1,
      name: 'ХАЦЕЛИМ',
      prise: '890',
      weight: '280г',
      image:
        'https://dellos-delivery.ru/upload/iblock/ba4/ba4b5d3cfc1858b895b37be225dfe381.jpg',
      ingredients: {
        авокадо: true,
        зелень: true,
        шалот: true,
        масло: true,
        лимон: true,
      },
    },
    {
      id: 2,
      name: 'ЛАТКЕС ',
      prise: '250',
      weight: '100г',
      image:
        'https://dellos-delivery.ru/upload/iblock/9fe/9fea0c6aee578dfc50a033e7e547e644.jpg',
      ingredients: {соус: true, белок: true, соль: true, масло: true},
    },
    {
      id: 3,
      name: 'КАРТОШКА',
      prise: '120',
      weight: '410г',
      image:
        'https://dellos-delivery.ru/upload/iblock/e05/e053b9f5d3613211a48b8ddbec383753.jpg',
      ingredients: {
        чеснок: true,
        соус: true,
        cметана: true,
        лук: true,
        томат: true,
      },
    },
    {
      id: 4,
      name: 'ХУМУС  ',
      prise: '220',
      weight: '150г',
      image:
        'https://dellos-delivery.ru/upload/iblock/4a2/4a2fcee4f30bd0c548c489384c3b2152.jpg',
      ingredients: {нут: true, соус: true, сметана: true, томат: true},
    },
    {
      id: 5,
      name: 'БОРЩ',
      prise: '240',
      weight: '250г',
      image:
        'https://dellos-delivery.ru/upload/resize_cache/iblock/6db/1000_1000_0/6db539b51c19ae13921090e7040b8b81.jpg',
      ingredients: {
        пампушки: true,
        фасоль: true,
        сметана: true,
        рис: true,
        томат: true,
      },
    },
    {
      id: 6,
      name: 'ПИТА',
      prise: '120',
      weight: '350г',
      image:
        'https://dellos-delivery.ru/upload/iblock/348/3489a9bb9244d76581e65a1c532908b5.jpg',
      ingredients: {паста: true, тмин: true, лук: true, томат: true},
    },
    {
      id: 7,
      name: 'СТРОГАНОВ',
      prise: '320',
      weight: '550г',
      image:
        'https://dellos-delivery.ru/upload/resize_cache/iblock/d8f/1000_1000_0/d8f563ec6d2bee8bc778342e3de883ff.jpg',
      ingredients: {паста: true, тмин: true, лук: true, томат: true},
    },
    {
      id: 8,
      name: 'АРБУЗ',
      prise: '100',
      weight: '180г',
      image:
        'https://dellos-delivery.ru/upload/iblock/d1f/d1f7955bb09302a3f521670c22b1e5f1.jpg',
      ingredients: {паста: true, тмин: true, лук: true, томат: true},
    },
    {
      id: 9,
      name: 'ФОРШМАК',
      prise: '120',
      weight: '450г',
      image:
        'https://dellos-delivery.ru/upload/iblock/49f/49fe462229296ccb3d5dff45cd30ef10.jpg',
      ingredients: {
        селёдка: true,
        яйца: true,
        сыр: true,
        чедер: true,
        зёрна: true,
      },
    },
  ],
  [
    {
      id: 1,
      name: 'Тартар',
      prise: '120',
      weight: '500г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039',
      ingredients: {
        авокадо: true,
        зелень: true,
        шалот: true,
        масло: true,
        лимон: true,
      },
    },
    {
      id: 2,
      name: 'Тунец',
      prise: '150',
      weight: '400г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6788/wide/AdobeStock_166014726_result.jpeg?1564134468',
      ingredients: {кунжут: true, белок: true, соль: true, масло: true},
    },
    {
      id: 3,
      name: 'Мидии',
      prise: '90',
      weight: '450г',
      image:
        'https://www.edimdoma.ru/system/images/contents/0000/6789/wide/AdobeStock_196463507_result.jpeg?1564134469',
      ingredients: {
        петрушка: true,
        соус: true,
        чеснок: true,
        лук: true,
        томат: true,
      },
    },
    {
      id: 4,
      name: 'Стейк из лосося',
      prise: '270',
      weight: '150г',
      image:
        'https://dellos-delivery.ru/upload/iblock/7d7/7d714d455bce1370400c3ba18cbab127.jpg',
      ingredients: {спаржа: true, маринад: true, специи: true},
    },
  ],
]

export default foodData
