// МОК-ДАННЫЕ
const mockMenuData = [
  // ============ ЕДА ============
  
  // ЗАВТРАКИ НА ВЕСЬ ДЕНЬ 
  {
    id: 1, name: "КРЕВЕТКИ, ШПИНАТ, АВОКАДО, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Креветки, сливочное масло, шпинат, гуакамоле, авокадо, оливковое масло, чесночное масло, лимонный сок, соль, перец черный, салат из томатов с петрушкой, скрэмбл"
  },
  {
    id: 2, name: "ПАСТРАМИ, ХАШБРАУН, ШПИНАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "730 р", options: null, isAddon: false,
    composition: "Пастрами говядина, котлеты хашбраун (картофель, кукурузный крахмал, масло подсолнечное, паприка, черный перец, соль), салат из томатов с петрушкой, гуакамоле, шпинат, растительное масло"
  },
  {
    id: 3, name: "КРОКЕТЫ БАТАТ, ЛОСОСЬ, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Крокеты из батата, пармезан, моцарелла, фета, панировочные сухари, слабосоленый лосось, романо, редис, гуакамоле, салат из томатов с петрушкой"
  },
  {
    id: 4, name: "ОЛАДЬИ ИЗ ЦУКИНИ, ЛОСОСЬ, СТРАЧАТЕЛЛА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false,
    composition: "Цукини, мука, яйцо, соль, перец, лосось, страчателла, лук сибулет, петрушка, зеленое масло (растительное масло, шпинат, петрушка)"
  },
  {
    id: 5, name: "ШАКШУКА, КОЛБАСКИ, ФЕТА, ШПИНАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "770 р", options: null, isAddon: false,
    composition: "Томаты, красный лук ялтинский, колбаска говяжья, перец запеченный ромиро, яйца, томатный соус, фета, шпинат, лук маринованный, сливочное масло, чесночное масло, лук сибулет, петрушка, тартин"
  },
  {
    id: 6, name: "ФРАНЦУЗСКИЙ ОМЛЕТ, ИНДЕЙКА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Яйца, соль, перец, пастрами индейка, гауда, романо, редис, томаты с петрушкой, греческая заправка"
  },
  {
    id: 7, name: "ОВСЯНАЯ КАША, ГОЛУБИКА, БАНАН",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false,
    composition: "Овсяные хлопья, молоко, ванильный сахар, банан, голубика"
  },
  {
    id: 8, name: "РИСОВАЯ КАША, КЛУБНИКА, ГРАНОЛА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "480 р", options: null, isAddon: false,
    composition: "Рис, молоко, ванильный сахар, гранола (изюм, фундук, миндаль, овсяные хлопья, мед), клубника"
  },
  {
    id: 9, name: "ПАНИНИ, ПАСТРАМИ, ТОМАТ, ГАУДА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false,
    composition: "Панини, соус сэндвичный (горчица зернистая, майонез, кетчуп), гауда, пастрами говядина, томаты"
  },
  {
    id: 10, name: "КРУАССАН, ЛОСОСЬ, КРЕМ-ЧИЗ, АВОКАДО",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "630 р", options: null, isAddon: false,
    composition: "Круассан, крем-чиз, гуакамоле, авокадо, масло чесночное, лимонный фреш, соль, перец, лосось с/с, руккола"
  },
  {
    id: 11, name: "КРУАССАН, ИНДЕЙКА, СКРЭМБЛ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "650 р", options: null, isAddon: false,
    composition: "Круассан, пастрами индейка, соус бургерный (майонез, соус кимчи), романо, запеченный перец рамиро, скрэмбл, сливочное масло, пармезан"
  },
  {
    id: 12, name: "КРУАССАН, ТРЮФЕЛЬ, СТРАЧАТЕЛЛА, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false,
    composition: "Круассан, страчателла, томат, трюфельная паста"
  },
  {
    id: 13, name: "СЫРНИКИ, КЛУБНИКА, ЛИМОННАЯ СМЕТАНА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "610 р", options: null, isAddon: false,
    composition: "Сырники (творог, ванильный сахар, желток, мука), лепестки миндаля, клубника, лимонная сметана, малиновое варенье, сублимированная малина"
  },
  {
    id: 14, name: "ЙОГУРТ, ЯГОДЫ, МИНДАЛЬ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "490 р", options: null, isAddon: false,
    composition: "Греческий йогурт, малиновое варенье, цедра лайма, голубика, миндаль"
  },
  {
    id: 15, name: "СКРЭМБЛ, КРЕВЕТКИ, ЗАПЕЧЕННЫЙ ПЕРЕЦ, ОЛИВКИ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false,
    composition: "Скрэмбл, креветки, перец рамиро, пармезан, оливки каламата, микс зелени"
  },
  {
    id: 16, name: "СКРЭМБЛ, ТРЮФЕЛЬ, СТРАЧАТЕЛЛА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "670 р", options: null, isAddon: false,
    composition: "Скрэмбл, трюфель, страчателла, трюфельное масло, зелень"
  },
  {
    id: 17, name: "БРИОШЬ, РОСТБИФ, ЯЙЦО",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Бриошь, сливочное масло, бургерный соус (соус кимчи, майонез), руккола, томаты узбекские, ростбиф (вырезка, соль, чеснок, сливочное масло), яйцо, сибулет, черри маринованные (кимчи, соль, петрушка, вода), медово-горчичная заправка (мед, горчица зернистая, сок лайма, оливковое масло), чили масло (хлопья чили, масло растительное)"
  },
  {
    id: 18, name: "КАЦУ-СЭНДВИЧ, ЦЫПЛЕНОК, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Шницель, микс зелени, томат, сладкий чили, бриошь"
  },
  {
    id: 19, name: "ТОСТ, КРЕВЕТКИ, АВОКАДО, ЧЕРРИ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Тартин луковый, креветки, сладкий чили, авокадо, зеленый лук"
  },

  // СПЕШЛ 
  {
    id: 20, name: "ЛЕПЕШКА РОТИ, ЛОСОСЬ, ЛИМОН",
    description: "", priceInfo: "", category: "СПЕШЛ",
    mainCategory: "Еда", subCategory: "СПЕШЛ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Лепешка роти, лосось слабой соли, крем-чиз, каперсы, укроп, лук, лимон"
  },
  {
    id: 21, name: "БУРРАТА, ЗАПЕЧЕННЫЙ ПЕРЕЦ, ТОМАТ", 
    description: "", priceInfo: "", category: "СПЕШЛ",
    mainCategory: "Еда", subCategory: "СПЕШЛ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Буррата, запеченный перец рамиро, томат, айсберг, романо, бальзамик, соус песто, базилик"
  },
  {
    id: 22, name: "ЗАПЕЧЕННЫЙ РАМИРО, ЛИМОННЫЙ КРЕМ-ЧИЗ, СОУС ТОННАТО", 
    description: "", priceInfo: "", category: "СПЕШЛ",
    mainCategory: "Еда", subCategory: "СПЕШЛ",
    volumeInfo: null, basePrice: "770 р", options: null, isAddon: false,
    composition: "Запеченный перец рамиро, оливковое масло, соль, перец, соус тоннато (анчоусы, оливковое масло, каперсы, яйца, соль, сахар, горчица, чеснок, пармезан, тунец обжаренный), оливковое масло, черный перец, сибулет, крем-чиз, лимон) "
  },
  {
    id: 23, name: "АРБУЗ, ФЕТА, ТАРХУН", 
    description: "", priceInfo: "", category: "СПЕШЛ",
    mainCategory: "Еда", subCategory: "СПЕШЛ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Арбуз, Фета, тархун, руккола, фисташка, лук маринованный, клубника, Фета, авокадо, томат, лимон, маракуйя, кунжут"
  },
  {
    id: 24, name: "ОКРОШКА, РОСТБИФ, ЛИМОННАЯ СМЕТАНА",  
    description: "", priceInfo: "", category: "СПЕШЛ",
    mainCategory: "Еда", subCategory: "СПЕШЛ",
    volumeInfo: null, basePrice: "650 р", options: null, isAddon: false,
    composition: "Яйцо, огурец, ростбиф, картофель, редис, сметана, хрен, горчица, лимон, укроп, сибулет, квас/айран"
  },
  {
    id: 25, name: "ГАСПАЧО, РАКОВЫЕ ШЕЙКИ, БАЗИЛИК",   
    description: "", priceInfo: "", category: "СПЕШЛ",
    mainCategory: "Еда", subCategory: "СПЕШЛ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Томат, перец рамиро, огурец, лук, чеснок, оливковое масло, винный уксус, оливки каламата, Фета, базилик, раковые шейки"
  },
  {
    id: 26, name: "КРОКЕТЫ КРАБ, КЛУБНИКА, ТОМАТ",   
    description: "", priceInfo: "", category: "СПЕШЛ",
    mainCategory: "Еда", subCategory: "СПЕШЛ",
    volumeInfo: null, basePrice: "1090 р", options: null, isAddon: false,
    composition: "Креветка, краб, сливки, чеснок, яйцо, шпинат, руккола, клубника, мёд, Фета, томат, авокадо"
  },

  // СУПЫ 
  {
    id: 27, name: "КУРИНЫЙ БУЛЬОН, ОРЗО",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false,
    composition: "Куриный бульон, куриная грудка, орзо, отварное яйцо, укроп, соль"
  },
  {
    id: 28, name: "ТЫКВЕННЫЙ КРЕМ-СУП, ЛОСОСЬ",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false,
    composition: "Тыква, репчатый лук, морковь, масло растительное, масло чесночное, мед, сливки 33%, лосось с/с, тыквенные семечки, руккола, оливковое масло, соль"
  },
  {
    id: 29, name: "СЫРНЫЙ КРЕМ-СУП, ИНДЕЙКА",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "630 р", options: null, isAddon: false,
    composition: "Картофель, лук, чеснок, морковь, куриный бульон, гауда, плавленный сыр, соль, перец, фета крамбл, чили масло, пастрами индейка, гренки из тартина"
  },

  // РИМСКАЯ ПИЦЦА 
  {
    id: 30, name: "ЛОСОСЬ, ПАРМЕЗАН, РУККОЛА",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1390 р", options: null, isAddon: false,
    composition: "Основа, красная икра, руккола, пармезан, лосось, сливки, моцарелла"
  },
  {
    id: 31, name: "ЦЫПЛЕНОК, ПЕСТО, ТОМАТ",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1100 р", options: null, isAddon: false,
    composition: "Основа, томат, перец рамиро, цыпленок, сливки, пармезан, моцарелла, песто"
  },
  {
    id: 32, name: "ПЕППЕРОНИ",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Основа, пепперони, лук ялтинский, моцарелла, соус томатный, сибулет"
  },
  {
    id: 33, name: "ЧЕТЫРЕ СЫРА",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1190 р", options: null, isAddon: false,
    composition: "Основа, сыр творожный, фета, дор блю, пармезан, моцарелла, страчателла с песто"
  },

  // ЗАКУСКИ 
  {
    id: 34, name: "АССОРТИ БРУСКЕТТ, КРУАССАН",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "1090 р", options: null, isAddon: false,
    composition: "Круассан, гуакамоле-киви, краб, крем-чиз, лосось с/с, соус бургерный, пастрами говядина, гуакамоле, креветки, руккола, крем-бальзамик"
  },
  {
    id: 35, name: "ФРИ, ПАРМЕЗАН, ТРЮФЕЛЬ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "370 р", options: null, isAddon: false,
    composition: "Картофель фри, тертый пармезан, соль, трюфельное масло"
  },
  {
    id: 36, name: "БАТАТ ФРИ, ТРЮФЕЛЬНЫЙ МУСС",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false,
    composition: "Батат-фри, трюфельный мусс (гауда, маскарпоне, творожный сыр, сок лайма, трюфельная паста, сливки 10%)"
  },
  {
    id: 37, name: "МОЦАРЕЛЛА, МЕД, ТРЮФЕЛЬНОЕ МАСЛО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false,
    composition: "Палочки моцареллы, панировка, мед, трюфельное масло"
  },
  {
    id: 38, name: "ТАРТАР ТУНЕЦ, КЛУБНИКА, ГРАНАТ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Тунец, клубника, зерна граната, медово-горчичная заправка, дрессинг лимон-маракуйя, оливковое масло, перец, соль, каперсы, каперсы фри, гуакамоле, чипсы из хлеба (багет), оливковое масло, авокадо, сублимированная клубника"
  },
  {
    id: 39, name: "СВЕКЛА, ТРЮФЕЛЬ, ФИСТАШКА",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Свекла, дробленая фисташка, пармезан, трюфельный мусс (гауда, маскарпоне, творожный сыр, сок лайма, трюфельная паста, сливки 10%)"
  },
  {
    id: 40, name: "БАТАТ, ДЗАДЗИКИ, ЛИМОН",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "570 р", options: null, isAddon: false,
    composition: "Крокеты из батата с сыром, дзадзики (огурец, лимонный сок, йогурт греческий, сметана, масло чили, лук зеленый, оливковое масло, соль, черный перец, чеснок), цедра лимона"
  },
  {
    id: 41, name: "ОПАЛЕННЫЙ ТУНЕЦ, ГУАКАМОЛЕ, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "570 р", options: null, isAddon: false,
    composition: "Гуакамоле, конкассе, маринованный лук (уксус винный белый + сахар), петрушка, тунец, соус с желтком и соевым соусом"
  },
  {
    id: 42, name: "ЧЕСНОЧНЫЕ КРЕВЕТКИ, ГУАКАМОЛЕ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Креветки, чеснок, оливковое масло, гуакамоле, лайм, черный перец"
  },
  {
    id: 43, name: "ЛЬНЯНОЙ ХЛЕБ, КРАБ, СТРАЧАТЕЛЛА",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Краб, томат, гуакамоле + киви, страчателла, яйцо, зеленое масло, чили масло, романо, айсберг, хлеб тартин бездрожжевой, руккола фри"
  },
  {
    id: 44, name: "РОСТБИФ, СОУС ТОННАТО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "950 р", options: null, isAddon: false,
    composition: "Ростбиф (говяжья вырезка, оливковое масло, соль, перец, чеснок рубленный, соевый соус), соус тоннато (анчоусы, оливковое масло, каперсы, яйца, соль, сахар, горчица, чеснок, пармезан, тунец обжаренный), каперсы, оливковое масло, черный перец, сибулет"
  },
  {
    id: 45, name: "ЗАПЕЧЕННЫЕ ПЕРЦЫ, СОУС ТОННАТО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Запеченный перец рамиро, оливковое масло, соль, перец, соус тоннато (анчоусы, оливковое масло, каперсы, яйца, соль, сахар, горчица, чеснок, пармезан, тунец обжаренный), каперсы, оливковое масло, черный перец, сибулет"
  },

  // САЛАТЫ 
  {
    id: 46, name: "ГРЕЧЕСКИЙ САЛАТ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "670 р", options: null, isAddon: false,
    composition: "Томаты, очищенные огурцы, красный перец рамиро, маринованный красный лук, уксус винный белый, сахар, крамбл из сыра фета, гренки из тартина, укроп, каперсы, оливки каламата, заправка (оливковое масло, фреш лимона, уксус винный белый, орегано сухой, чеснок запеченный, мед цветочный, горчица столовая)"
  },
  {
    id: 47, name: "ЗЕЛЕНЫЙ САЛАТ, ЛОСОСЬ, ПАРМЕЗАН",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Романо, шпинат, огурец, редис, лосось с/с, тертый пармезан, ореховая заправка"
  },
  {
    id: 48, name: "КРАБ, СТРАЧАТЕЛЛА, ТОМАТ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "950 р", options: null, isAddon: false,
    composition: "Романо, руккола, томат, страчателла, краб, песто, зеленое масло"
  },
  {
    id: 49, name: "ЦУКИНИ, ТОМАТ, КРЕМ-ЧИЗ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "650 р", options: null, isAddon: false,
    composition: "Цукини, кукурузный крахмал, томат, крем-чиз, соус чили-манго, соус сладкий чили, кунжут, руккола"
  },
  {
    id: 50, name: "ЗЕЛЕНЫЙ САЛАТ, ТУНЕЦ, ЯЙЦО",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Романо, айсберг, руккола, конкассе из черри, огурец, медово-горчичная заправка, тунец, яйцо"
  },
  {
    id: 51, name: "САЛАТ РОСТБИФ, КАРТОФЕЛЬ, ПЕЧЕННЫЙ БАКЛАЖАН",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false,
    composition: "Картофель бейби, ростбиф из говядины (вырезка, соль, чеснок, сливочное масло), печеный баклажан, томаты узбекские, шпинат, романо, лук ялтинский маринованный, соус кимчи (оливковое масло, соус кимчи, зернистая горчицы, сок лайма)"
  },
  {
    id: 52, name: "ЗЕЛЕНЫЙ САЛАТ, АВОКАДО, БОБЫ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "650 р", options: null, isAddon: false,
    composition: "Романо, руккола, шпинат, бобы, авокадо, огурец, микс семечек, запеченный цукини, гуакамоле, зеленое масло"
  },

  // НА ГОРЯЧЕЕ 
  {
    id: 53, name: "КРЕВЕТКИ, КАРТОФЕЛЬ, ПЕСТО",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "870 р", options: null, isAddon: false,
    composition: "Креветки, чесночное масло, сливки 33%, пармезан, песто, бейби картофель, чеснок гранулированный, орегано, укроп, соль, перец"
  },
  {
    id: 54, name: "ГОВЯЖЬИ ЩЕКИ, ОРЗО, ШПИНАТ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Щеки говяжьи, соус демиглас, шпинат, растительное масло, орзо, куриный бульон, сливки 33%, пармезан, соль, перец"
  },
  {
    id: 55, name: "БИФШТЕКС, ТОЛЧЕНЫЙ КАРТОФЕЛЬ, ЛИМОННАЯ СМЕТАНА",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Бифштекс, фета, картофель бейби отварной, сливочное масло, петрушка, укроп, лук сибулет, цедра лайма, лимонная сметана, карамелизированный лук, зелёное масло, чеснок"
  },
  {
    id: 56, name: "БРИСКЕТ, ЙОГУРТ, КАРТОФЕЛЬ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Стейк из говядины, картофель бейби, чеснок, томатный соус (томат в собственном соку, чеснок, лук, орегано, соль, перец), пармезан, красный ялтинский маринованный лук, лук сибулет, греческий йогурт, зеленое масло"
  },
  {
    id: 57, name: "ОРЗО, КРЕВЕТКИ, ТРЮФЕЛЬ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Креветки, трюфельный мусс, орзо, соль, перец, шпинат, сливки 33%, пармезан, трюфельное масло, страчателла с трюфелем"
  },
  {
    id: 58, name: "ЛОСОСЬ НА ГРИЛЕ, ПЮРЕ ИЗ ЦВЕТНОЙ КАПУСТЫ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "1190 р", options: null, isAddon: false,
    composition: "Лосось, цедра лайма, оливковое масло, соль, перец, пюре цветная капуста (цветная капуста, сливочное масло, молоко, сливки 10%), сибулет, медово-горчичный дрессинг (зернистая горчица, оливковое масло, сок лайма, мед, соль)"
  },
  {
    id: 59, name: "СПАГЕТТИ ИЗ ЦУКИНИ, КРЕВЕТКИ, ТОМАТ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "870 р", options: null, isAddon: false,
    composition: "Растительное масло, чеснок, сливочное масло, креветки, конкассе черри, спагетти из цукини, пармезан, петрушка, вода"
  },
  {
    id: 60, name: "БУРГЕР ГОВЯДИНА, РУККОЛА, ГОРГОНЗОЛА",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false,
    composition: "Булочка для бургера, соус бургерный (соус кимчи, майонез), горгонзола, руккола, карамелезированный лук, котлета из мраморной говядины (мраморная говядина, лук репчатый, масло растительное, масло сливочное, соус нашараб, соль, сахар тростниковый)"
  },
  {
    id: 61, name: "ПАСТА ТОРТИЛЬОНИ, ГОВЯЖЬИ ЩЕЧКИ, УСТРИЧНЫЙ СОУС",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Паста отварная, щеки, масло растительное, карамелезированный лук, шампиньоны, чеснок, сливки 33%, устричный соус, соль, перец, пармезан, гауда"
  },
  {
    id: 62, name: "ШНИЦЕЛЬ, РОМАНО, ЦЕЗАРЬ, ПАРМЕЗАН",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false,
    composition: "Куриный шницель, романо, айсберг, пармезан, соус цезарь"
  },

  // БЛЮДА ИЗ ЯИЦ (3 основных + 13 дополнений = 16 блюд)
  {
    id: 63, name: "ГЛАЗУНЬЯ",
    description: "Яичница глазунья", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main",
    composition: "Яйца, салат, оливковое масло"
  },
  {
    id: 64, name: "СКРЭМБЛ",
    description: "Взбитые яйца", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main",
    composition: "Яйца, сливки, салат, оливковое масло"
  },
  {
    id: 65, name: "ОМЛЕТ",
    description: "Французский омлет", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main",
    composition: "Яйца, микс салата, оливковое масло"
  },
  {
    id: 66, name: "+ ЛОСОСЬ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "350 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 67, name: "+ КРЕВЕТКИ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "330 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 68, name: "+ КРАБ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 69, name: "+ ПАСТРАМИ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "290 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 70, name: "+ ИНДЕЙКА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "290 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 71, name: "+ ХАШБРАУН",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 72, name: "+ ПАРМЕЗАН",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 73, name: "+ ФЕТА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 74, name: "+ СТРАЧАТЕЛЛА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 75, name: "+ КРЕМ-ЧИЗ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 76, name: "+ АВОКАДО",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 77, name: "+ САЛАТ ИЗ ТОМАТОВ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 78, name: "+ ШПИНАТ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: true,
    composition: null
  },
];

console.log('✅ Загружены мок-данные: ' + mockMenuData.length + ' блюд');

// СЕРВИС ДЛЯ РАБОТЫ С МЕНЮ
export const menuService = {
  async getDishes() {
    return mockMenuData;
  },
  
  async getAll() {
    return this.getDishes();
  },
  
  async getRecommended() {
    const dishes = await this.getDishes();
    return dishes.slice(0, 3);
  },
  
  async getByCategory(category) {
    const dishes = await this.getDishes();
    return dishes.filter(dish => 
      dish.subCategory === category || 
      dish.mainCategory === category
    );
  }
};

export default {
  menuService
};