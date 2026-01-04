// frontend/src/services/api.js
import axios from 'axios';

// Определяем, где мы находимся
const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1';
const isGitHubPages = window.location.hostname.includes('github.io');

console.log(`📍 Определено окружение: ${isLocalhost ? 'Локально' : 'Продакшен'}`);
console.log(`🌐 Хост: ${window.location.hostname}`);

// МОК-ДАННЫЕ для GitHub Pages (ПОЛНОЕ РЕАЛЬНОЕ МЕНЮ - 161 блюдо)
const mockMenuData = [
  // ============ ЕДА ============
  
  // ЗАВТРАКИ НА ВЕСЬ ДЕНЬ (15 блюд)
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
    id: 4, name: "КРОКЕТЫ КРАБ, КЛУБНИКА, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "1190 р", options: null, isAddon: false,
    composition: "3 крокета краб-креветка, сливки 33%, пармезан, гранулированный чеснок, петрушка, льезон, сухари панко, шпинат свежий, руккола, клубника, фета, салат из томатов с петрушкой, яйцо, гуакамоле-киви"
  },
  {
    id: 5, name: "ОЛАДЬИ ИЗ ЦУКИНИ, ЛОСОСЬ, СТРАЧАТЕЛЛА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false,
    composition: "Цукини, мука, яйцо, соль, перец, лосось, страчателла, лук сибулет, петрушка, зеленое масло (растительное масло, шпинат, петрушка)"
  },
  {
    id: 6, name: "ШАКШУКА, КОЛБАСКИ, ФЕТА, ШПИНАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "770 р", options: null, isAddon: false,
    composition: "Томаты, красный лук ялтинский, колбаска говяжья, перец запеченный ромиро, яйца, томатный соус, фета, шпинат, лук маринованный, сливочное масло, чесночное масло, лук сибулет, петрушка, тартин"
  },
  {
    id: 7, name: "ФРАНЦУЗСКИЙ ОМЛЕТ, ИНДЕЙКА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Яйца, соль, перец, пастрами индейка, гауда, романо, редис, томаты с петрушкой, греческая заправка"
  },
  {
    id: 8, name: "ОВСЯНАЯ КАША, ГОЛУБИКА, БАНАН",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false,
    composition: "Овсяные хлопья, молоко, ванильный сахар, банан, голубика"
  },
  {
    id: 9, name: "РИСОВАЯ КАША, КЛУБНИКА, ГРАНОЛА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "480 р", options: null, isAddon: false,
    composition: "Рис, молоко, ванильный сахар, гранола (изюм, фундук, миндаль, овсяные хлопья, мед), клубника"
  },
  {
    id: 10, name: "ПАНИНИ, ПАСТРАМИ, ТОМАТ, ГАУДА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false,
    composition: "Панини, соус сэндвичный (горчица зернистая, майонез, кетчуп), гауда, пастрами говядина, томаты"
  },
  {
    id: 11, name: "КРУАССАН, ЛОСОСЬ, КРЕМ-ЧИЗ, АВОКАДО",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "630 р", options: null, isAddon: false,
    composition: "Круассан, крем-чиз, гуакамоле, авокадо, масло чесночное, лимонный фреш, соль, перец, лосось с/с, руккола"
  },
  {
    id: 12, name: "КРУАССАН, ИНДЕЙКА, СКРЭМБЛ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "650 р", options: null, isAddon: false,
    composition: "Круассан, пастрами индейка, соус бургерный (майонез, соус кимчи), романо, запеченный перец рамиро, скрэмбл, сливочное масло, пармезан"
  },
  {
    id: 13, name: "КРУАССАН, ТРЮФЕЛЬ, СТРАЧАТЕЛЛА, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false,
    composition: "Круассан, страчателла, томат, трюфельная паста"
  },
  {
    id: 14, name: "СЫРНИКИ, КЛУБНИКА, ЛИМОННАЯ СМЕТАНА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "610 р", options: null, isAddon: false,
    composition: "Сырники (творог, ванильный сахар, желток, мука), лепестки миндаля, клубника, лимонная сметана, малиновое варенье, сублимированная малина"
  },
  {
    id: 15, name: "ЙОГУРТ, ЯГОДЫ, МИНДАЛЬ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "490 р", options: null, isAddon: false,
    composition: "Греческий йогурт, малиновое варенье, цедра лайма, голубика, миндаль"
  },

  // NEW YEAR SPECIAL (7 блюд)
  {
    id: 16, name: "БРИОШЬ, РОСТБИФ, ЯЙЦО",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Бриошь, сливочное масло, бургерный соус (соус кимчи, майонез), руккола, томаты узбекские, ростбиф (вырезка, соль, чеснок, сливочное масло), яйцо, сибулет, черри маринованные (кимчи, соль, петрушка, вода), медово-горчичная заправка (мед, горчица зернистая, сок лайма, оливковое масло), чили масло (хлопья чили, масло растительное)"
  },
  {
    id: 17, name: "САЛАТ РОСТБИФ, КАРТОФЕЛЬ, ПЕЧЕННЫЙ БАКЛАЖАН",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false,
    composition: "Картофель бейби, ростбиф из говядины (вырезка, соль, чеснок, сливочное масло), печеный баклажан, томаты узбекские, шпинат, романо, лук ялтинский маринованный, соус кимчи (оливковое масло, соус кимчи, зернистая горчицы, сок лайма)"
  },
  {
    id: 18, name: "ОЛИВЬЕ КРАБ | БРИСКЕТ, ПЮРЕ ИЗ ЗЕЛЕНОГО ГОРОШКА, КРАСНАЯ ИКРА",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Краб / брикет, картофель, морковь, пюре горошек (горошек свежемороженый, сливочное масло, соль), яйца перепелиные, малосольные огурцы (огурцы, чеснок, соль, петрушка, соевый соус, соус кимчи), японский майонез, икра красная, зеленое масло (петрушка, укроп, растительное масло)"
  },
  {
    id: 19, name: "САЛАТ С УТИНОЙ ГРУДКОЙ, ПЕРСИК",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Руккола, шпинат, романо, персик консервированный, медово-горчичная заправка (мед, горчица зернистая, сок лайма, оливковое масло), варенье вишня, дор блю, арахис дробленный, утиная грудка"
  },
  {
    id: 20, name: "ЛОСОСЬ ПОД ШУБОЙ",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "810 р", options: null, isAddon: false,
    composition: "Свекла, картофель, батат, лосось, лук-шалот, майонез, яйцо, лук сибулет"
  },
  {
    id: 21, name: "КРУАССАН / БЛИНЫ, КРАСНАЯ ИКРА, МАСЛО С ТРАВАМИ",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Круассан / блины (молоко, мука, яйца, сахар, соль, растительное масло, сливочное масло), икра, сливочное масло, лук сибулет, зеленое масло, черный перец"
  },
  {
    id: 22, name: "УТИНАЯ ГРУДКА, РАТАТУЙ, МЕД",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "950 р", options: null, isAddon: false,
    composition: "Утиная грудка, рататуй овощной (томат, кабачок, баклажан, оливковое масло, соль, перец), томатный соус (томаты с/с, соль, перец, чеснок, лук, орегано), пармезан, соль, перец, оливковое масло, медово-горчичная заправка (мед, горчица зернистая, сок лайма, оливковое масло), масло зеленое (петрушка, укроп, растительное масло)"
  },

  // СУПЫ (3 блюда)
  {
    id: 23, name: "КУРИНЫЙ БУЛЬОН, ОРЗО",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false,
    composition: "Куриный бульон, куриная грудка, орзо, отварное яйцо, укроп, соль"
  },
  {
    id: 24, name: "ТЫКВЕННЫЙ КРЕМ-СУП, ЛОСОСЬ",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false,
    composition: "Тыква, репчатый лук, морковь, масло растительное, масло чесночное, мед, сливки 33%, лосось с/с, тыквенные семечки, руккола, оливковое масло, соль"
  },
  {
    id: 25, name: "СЫРНЫЙ КРЕМ-СУП, ИНДЕЙКА",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "630 р", options: null, isAddon: false,
    composition: "Картофель, лук, чеснок, морковь, куриный бульон, гауда, плавленный сыр, соль, перец, фета крамбл, чили масло, пастрами индейка, гренки из тартина"
  },

  // РИМСКАЯ ПИЦЦА (4 блюда)
  {
    id: 26, name: "ЛОСОСЬ, КРАСНАЯ ИКРА, ПАРМЕЗАН",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1750 р", options: null, isAddon: false,
    composition: "Основа, красная икра, руккола, пармезан, лосось, сливки, моцарелла"
  },
  {
    id: 27, name: "ЦЫПЛЕНОК, ПЕСТО, ТОМАТ",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1100 р", options: null, isAddon: false,
    composition: "Основа, томат, перец рамиро, цыпленок, сливки, пармезан, моцарелла, песто"
  },
  {
    id: 28, name: "ПЕППЕРОНИ",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Основа, пепперони, лук ялтинский, моцарелла, соус томатный, сибулет"
  },
  {
    id: 29, name: "ЧЕТЫРЕ СЫРА",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1190 р", options: null, isAddon: false,
    composition: "Основа, сыр творожный, фета, дор блю, пармезан, моцарелла, страчателла с песто"
  },

  // ЗАКУСКИ (12 блюд)
  {
    id: 30, name: "АССОРТИ БРУСКЕТТ, КРУАССАН",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "1090 р", options: null, isAddon: false,
    composition: "Круассан, гуакамоле-киви, краб, крем-чиз, лосось с/с, соус бургерный, пастрами говядина, гуакамоле, креветки, руккола, крем-бальзамик"
  },
  {
    id: 31, name: "ФРИ, ПАРМЕЗАН, ТРЮФЕЛЬ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "370 р", options: null, isAddon: false,
    composition: "Картофель фри, тертый пармезан, соль, трюфельное масло"
  },
  {
    id: 32, name: "БАТАТ ФРИ, ТРЮФЕЛЬНЫЙ МУСС",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false,
    composition: "Батат-фри, трюфельный мусс (гауда, маскарпоне, творожный сыр, сок лайма, трюфельная паста, сливки 10%)"
  },
  {
    id: 33, name: "МОЦАРЕЛЛА, МЕД, ТРЮФЕЛЬНОЕ МАСЛО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false,
    composition: "Палочки моцареллы, панировка, мед, трюфельное масло"
  },
  {
    id: 34, name: "ТАРТАР ТУНЕЦ, КЛУБНИКА, ГРАНАТ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Тунец, клубника, зерна граната, медово-горчичная заправка, дрессинг лимон-маракуйя, оливковое масло, перец, соль, каперсы, каперсы фри, гуакамоле, чипсы из хлеба (багет), оливковое масло, авокадо, сублимированная клубника"
  },
  {
    id: 35, name: "СВЕКЛА, ТРЮФЕЛЬ, ФИСТАШКА",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Свекла, дробленая фисташка, пармезан, трюфельный мусс (гауда, маскарпоне, творожный сыр, сок лайма, трюфельная паста, сливки 10%)"
  },
  {
    id: 36, name: "БАТАТ, ДЗАДЗИКИ, ЛИМОН",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "570 р", options: null, isAddon: false,
    composition: "Крокеты из батата с сыром, дзадзики (огурец, лимонный сок, йогурт греческий, сметана, масло чили, лук зеленый, оливковое масло, соль, черный перец, чеснок), цедра лимона"
  },
  {
    id: 37, name: "ОПАЛЕННЫЙ ТУНЕЦ, ГУАКАМОЛЕ, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "570 р", options: null, isAddon: false,
    composition: "Гуакамоле, конкассе, маринованный лук (уксус винный белый + сахар), петрушка, тунец, соус с желтком и соевым соусом"
  },
  {
    id: 38, name: "ЧЕСНОЧНЫЕ КРЕВЕТКИ, ГУАКАМОЛЕ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Креветки, чеснок, оливковое масло, гуакамоле, лайм, черный перец"
  },
  {
    id: 39, name: "ЛЬНЯНОЙ ХЛЕБ, КРАБ, СТРАЧАТЕЛЛА",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Краб, томат, гуакамоле + киви, страчателла, яйцо, зеленое масло, чили масло, романо, айсберг, хлеб тартин бездрожжевой, руккола фри"
  },
  {
    id: 40, name: "РОСТБИФ, СОУС ТОННАТО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "950 р", options: null, isAddon: false,
    composition: "Ростбиф (говяжья вырезка, оливковое масло, соль, перец, чеснок рубленный, соевый соус), соус тоннато (анчоусы, оливковое масло, каперсы, яйца, соль, сахар, горчица, чеснок, пармезан, тунец обжаренный), каперсы, оливковое масло, черный перец, сибулет"
  },
  {
    id: 41, name: "ЗАПЕЧЕННЫЕ ПЕРЦЫ, СОУС ТОННАТО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Запеченный перец рамиро, оливковое масло, соль, перец, соус тоннато (анчоусы, оливковое масло, каперсы, яйца, соль, сахар, горчица, чеснок, пармезан, тунец обжаренный), каперсы, оливковое масло, черный перец, сибулет"
  },

  // САЛАТЫ (5 блюд)
  {
    id: 42, name: "ГРЕЧЕСКИЙ САЛАТ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "670 р", options: null, isAddon: false,
    composition: "Томаты, очищенные огурцы, красный перец рамиро, маринованный красный лук, уксус винный белый, сахар, крамбл из сыра фета, гренки из тартина, укроп, каперсы, оливки каламата, заправка (оливковое масло, фреш лимона, уксус винный белый, орегано сухой, чеснок запеченный, мед цветочный, горчица столовая)"
  },
  {
    id: 43, name: "ЗЕЛЕНЫЙ САЛАТ, ЛОСОСЬ, ПАРМЕЗАН",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false,
    composition: "Романо, шпинат, огурец, редис, лосось с/с, тертый пармезан, ореховая заправка"
  },
  {
    id: 44, name: "КРАБ, СТРАЧАТЕЛЛА, ТОМАТ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "950 р", options: null, isAddon: false,
    composition: "Романо, руккола, томат, страчателла, краб, песто, зеленое масло"
  },
  {
    id: 45, name: "ЦУКИНИ, ТОМАТ, КРЕМ-ЧИЗ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "650 р", options: null, isAddon: false,
    composition: "Цукини, кукурузный крахмал, томат, крем-чиз, соус чили-манго, соус сладкий чили, кунжут, руккола"
  },
  {
    id: 46, name: "ЗЕЛЕНЫЙ САЛАТ, ТУНЕЦ, ЯЙЦО",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false,
    composition: "Романо, айсберг, руккола, конкассе из черри, огурец, медово-горчичная заправка, тунец, яйцо"
  },

  // НА ГОРЯЧЕЕ (9 блюд)
  {
    id: 47, name: "КРЕВЕТКИ, КАРТОФЕЛЬ, ПЕСТО",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "870 р", options: null, isAddon: false,
    composition: "Креветки, чесночное масло, сливки 33%, пармезан, песто, бейби картофель, чеснок гранулированный, орегано, укроп, соль, перец"
  },
  {
    id: 48, name: "ГОВЯЖЬИ ЩЕКИ, ОРЗО, ШПИНАТ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Щеки говяжьи, соус демиглас, шпинат, растительное масло, орзо, куриный бульон, сливки 33%, пармезан, соль, перец"
  },
  {
    id: 49, name: "БИФШТЕКС, ТОЛЧЕНЫЙ КАРТОФЕЛЬ, ЛИМОННАЯ СМЕТАНА",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false,
    composition: "Бифштекс, фета, картофель бейби отварной, сливочное масло, петрушка, укроп, лук сибулет, цедра лайма, лимонная сметана, карамелизированный лук, зелёное масло, чеснок"
  },
  {
    id: 50, name: "БРИСКЕТ, ЙОГУРТ, КАРТОФЕЛЬ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Стейк из говядины, картофель бейби, чеснок, томатный соус (томат в собственном соку, чеснок, лук, орегано, соль, перец), пармезан, красный ялтинский маринованный лук, лук сибулет, греческий йогурт, зеленое масло"
  },
  {
    id: 51, name: "ОРЗО, КРЕВЕТКИ, ТРЮФЕЛЬ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Креветки, трюфельный мусс, орзо, соль, перец, шпинат, сливки 33%, пармезан, трюфельное масло, страчателла с трюфелем"
  },
  {
    id: 52, name: "ЛОСОСЬ НА ГРИЛЕ, ПЮРЕ ИЗ ЦВЕТНОЙ КАПУСТЫ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "1190 р", options: null, isAddon: false,
    composition: "Лосось, цедра лайма, оливковое масло, соль, перец, пюре цветная капуста (цветная капуста, сливочное масло, молоко, сливки 10%), сибулет, медово-горчичный дрессинг (зернистая горчица, оливковое масло, сок лайма, мед, соль)"
  },
  {
    id: 53, name: "СПАГЕТТИ ИЗ ЦУКИНИ, КРЕВЕТКИ, ТОМАТ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "870 р", options: null, isAddon: false,
    composition: "Растительное масло, чеснок, сливочное масло, креветки, конкассе черри, спагетти из цукини, пармезан, петрушка, вода"
  },
  {
    id: 54, name: "БУРГЕР ГОВЯДИНА, РУККОЛА, ГОРГОНЗОЛА",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false,
    composition: "Булочка для бургера, соус бургерный (соус кимчи, майонез), горгонзола, руккола, карамелезированный лук, котлета из мраморной говядины (мраморная говядина, лук репчатый, масло растительное, масло сливочное, соус нашараб, соль, сахар тростниковый)"
  },
  {
    id: 55, name: "ПАСТА ТОРТИЛЬОНИ, ГОВЯЖЬИ ЩЕЧКИ, УСТРИЧНЫЙ СОУС",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false,
    composition: "Паста отварная, щеки, масло растительное, карамелезированный лук, шампиньоны, чеснок, сливки 33%, устричный соус, соль, перец, пармезан, гауда"
  },

  // БЛЮДА ИЗ ЯИЦ (1 основное + 13 дополнений = 14 блюд)
  {
    id: 56, name: "ГЛАЗУНЬЯ",
    description: "Яичница глазунья", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main",
    composition: "Яйца, салат, оливковое масло"
  },
  {
    id: 56.1, name: "СКРЭМБЛ",
    description: "Взбитые яйца", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main",
    composition: "Яйца, сливки, салат, оливковое масло"
  },
  {
    id: 56.2, name: "ОМЛЕТ",
    description: "Французский омлет", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main",
    composition: "Яйца, микс салата, оливковое масло"
  },
  {
    id: 57, name: "+ ЛОСОСЬ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "350 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 58, name: "+ КРЕВЕТКИ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "330 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 59, name: "+ КРАБ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 60, name: "+ ПАСТРАМИ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "290 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 61, name: "+ ИНДЕЙКА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "290 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 62, name: "+ ХАШБРАУН",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 63, name: "+ ПАРМЕЗАН",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 64, name: "+ ФЕТА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 65, name: "+ СТРАЧАТЕЛЛА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 66, name: "+ КРЕМ-ЧИЗ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 67, name: "+ АВОКАДО",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 68, name: "+ САЛАТ ИЗ ТОМАТОВ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true,
    composition: null
  },
  {
    id: 69, name: "+ ШПИНАТ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: true,
    composition: null
  },

  // ============ НАПИТКИ ============
  // Для напитков composition: null (или можно добавить общее описание)

  // КОФЕ (19 напитков)
  {
    id: 70, name: "ЭСПРЕССО",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "35мл", basePrice: "230 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 71, name: "АМЕРИКАНО",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250мл", basePrice: "250 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 72, name: "ФИЛЬТР-КОФЕ",
    description: "", priceInfo: "240 | 260 р", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250 | 350 мл", basePrice: null, options: null, isAddon: false,
    composition: null
  },
  {
    id: 73, name: "КАПУЧИНО",
    description: "", priceInfo: "280 | 330 р", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250 | 350 мл", basePrice: null, options: null, isAddon: false,
    composition: null
  },
  {
    id: 74, name: "ЛАТТЕ",
    description: "", priceInfo: "310 | 350 р", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 | 450 мл", basePrice: null, options: null, isAddon: false,
    composition: null
  },
  {
    id: 75, name: "ФЛЭТ УАЙТ",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250мл", basePrice: "330 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 76, name: "РАФ",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350мл", basePrice: "420 р", options: "ВАНИЛЬ | ЦИТРУС | ПРАГА | ХАЛВА", isAddon: false,
    composition: null
  },
  {
    id: 77, name: "PAФ CHINCH",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 78, name: "МАТЧА ЛАТТЕ",
    description: "", priceInfo: "330 | 380 р", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250 | 350 мл", basePrice: null, options: null, isAddon: false,
    composition: null
  },
  {
    id: 79, name: "КАКАО-ШОКОЛАД",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "370 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 80, name: "БЕЛЫЙ КАКАО, ФИСТАШКА, СОЛЬ",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 81, name: "ЛАТТЕ СИНГАПУР",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 82, name: "ЛАТТЕ, БЕЛЫЙ ШОКОЛАД, ФИСТАШКА",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 83, name: "ЛАТТЕ ПТИЧЬЕ МОЛОКО",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 84, name: "БАМБЛ-КАРАМЕЛЬ",
    description: "Эспрессо, карамель, молоко", priceInfo: "420 / 450 / 850 р", 
    category: "КОФЕ", mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250 мл", basePrice: null, options: "ГРЕЙПФРУТ | ГРАНАТ", isAddon: false,
    composition: null
  },
  {
    id: 85, name: "ЭСПРЕССО-ТОНИК",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "390 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 86, name: "РАСТИТЕЛЬНОЕ МОЛОКО",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: null, basePrice: "90 р", options: "КОКОСОВОЕ | МИНДАЛЬНОЕ | ФУНДУЧНОЕ | БАНАНОВОЕ | БЕЗЛАКТОЗНОЕ", isAddon: false,
    composition: null
  },

  // ФРЕШ (4 напитка)
  {
    id: 87, name: "АПЕЛЬСИН",
    description: "", priceInfo: "", category: "ФРЕШ",
    mainCategory: "Напитки", subCategory: "ФРЕШ",
    volumeInfo: "200 мл", basePrice: "370 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 88, name: "ГРЕЙПФРУТ",
    description: "", priceInfo: "", category: "ФРЕШ",
    mainCategory: "Напитки", subCategory: "ФРЕШ",
    volumeInfo: "200 мл", basePrice: "370 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 89, name: "МАНДАРИН",
    description: "", priceInfo: "", category: "ФРЕШ",
    mainCategory: "Напитки", subCategory: "ФРЕШ",
    volumeInfo: "200 мл", basePrice: "470 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 90, name: "ГРАНАТ",
    description: "", priceInfo: "", category: "ФРЕШ",
    mainCategory: "Напитки", subCategory: "ФРЕШ",
    volumeInfo: "200 мл", basePrice: "790 р", options: null, isAddon: false,
    composition: null
  },

  // SPECIAL (9 напитков)
  {
    id: 91, name: "СИБИРСКИЙ ЛАТТЕ",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 92, name: "РАФ МАСАЛА",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 93, name: "ЛАТТЕ АРАХИС",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 94, name: "ЛАТТЕ ИМБИРНЫЙ ПРЯНИК",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 95, name: "ГЛИНТВЕЙН Б/А, ВИШНЯ, БАРБАРИС",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "250 мл", basePrice: "490 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 96, name: "ЗИМНИЙ БАМБЛ, МАНДАРИН",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "490 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 97, name: "АЛТАЙСКИЙ ЧАЙ, КЛЮКВА, МОЖЖЕВЕЛЬНИК",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 98, name: "СМОРОДИНА, АПЕЛЬСИН, МАСАЛА",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 99, name: "МОРОШКА, ПИХТА, МАЛИНА",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false,
    composition: null
  },

  // ХОЛОДНЫЕ НАПИТКИ (10 напитков)
  {
    id: 100, name: "АПЕРОЛЬ Б/А",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 101, name: "ДЮШЕС",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "410 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 102, name: "КЛУБНИКА-МЯТА",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "410 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 103, name: "ГРЕЙПФРУТ, БУРБОНСКАЯ ВАНИЛЬ",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "470 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 104, name: "МАНГО-МАРАКУЙЯ",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 105, name: "МАНГО, МАТЧА, КОКОС",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "470 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 106, name: "ГРЕЙПФРУТ-КЛУБНИКА",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 107, name: "ЗЕЛЕНОЕ ЯБЛОКО, САГАН-ДАЙЛЯ",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "420 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 108, name: "ПЕРСИК, ЛАЙМ, ЭСТРАГОН",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 109, name: "СМУЗИ КЛУБНИКА-КОКОС",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "400 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 110, name: "СМУЗИ АПЕЛЬСИН-ЧЕРНИКА",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "400 мл", basePrice: "450 р", options: null, isAddon: false,
    composition: null
  },

  // ЧАЙ / ТИЗАН (11 напитков)
  {
    id: 111, name: "ДАРДЖИЛИНГ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 112, name: "ЭРЛ ГРЕЙ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 113, name: "СЕНЧА",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 114, name: "ЖАСМИН",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 115, name: "СБОР ТРАВ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 116, name: "ГРЕЧИШНЫЙ ЧАЙ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 117, name: "ШИПОВНИК-МАЛИНА",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "420 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 118, name: "ГРЕЧИХА-МАНГО",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 119, name: "ОБЛЕПИХА-ЦИТРУС",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 120, name: "ЧЕРНИКА-БРУСНИКА",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 121, name: "МАЛИНА-МАРАКУЙЯ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false,
    composition: null
  },

  // СОК БУТ. (3 напитка)
  {
    id: 122, name: "ЯБЛОКО",
    description: "", priceInfo: "", category: "СОК БУТ.",
    mainCategory: "Напитки", subCategory: "СОК БУТ.",
    volumeInfo: "200 мл", basePrice: "290 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 123, name: "ВИШНЯ",
    description: "", priceInfo: "", category: "СОК БУТ.",
    mainCategory: "Напитки", subCategory: "СОК БУТ.",
    volumeInfo: "200 мл", basePrice: "290 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 124, name: "ПЕРСИК",
    description: "", priceInfo: "", category: "СОК БУТ.",
    mainCategory: "Напитки", subCategory: "СОК БУТ.",
    volumeInfo: "200 мл", basePrice: "290 р", options: null, isAddon: false,
    composition: null
  },

  // ВОДА (1 напиток)
  //{
    //id: 125, name: "MARUHA",
    //description: "", priceInfo: "", category: "ВОДА",
    //mainCategory: "Напитки", subCategory: "ВОДА",
    //volumeInfo: "500 мл", basePrice: "350 р", options: "НЕГАЗИРОВАННАЯ | ГАЗИРОВАННАЯ", isAddon: false,
    //composition: null
  //},

  // ПИВО (6 напитков)
  {
    id: 126, name: "ESTRELLA DAMN",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "490 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 127, name: "INEDIT DAMN",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "490 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 128, name: "CLAUSTHALER",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "390 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 129, name: "LEFFE BRUNE",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "490 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 130, name: "CIDER VAL DE RANCE",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "750 мл", basePrice: "1350 р", options: null, isAddon: false,
    composition: null
  },
  {
    id: 131, name: "CIDER GALIPETTE",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "790 р", options: null, isAddon: false,
    composition: null
  }
];

console.log('✅ Загружены мок-данные: ' + mockMenuData.length + ' блюд');

// Функция для получения данных
const getApiData = async () => {
  // Если локально - используем реальный API
  if (isLocalhost) {
    try {
      console.log('🚀 Локальный режим: запрос к реальному API');
      const response = await axios.get('http://localhost:5277/api/menu');
      return response.data;
    } catch (error) {
      console.error('❌ Ошибка API:', error);
      return mockMenuData; // fallback
    }
  }
  
  // Если GitHub Pages - используем мок-данные
  console.log('🌐 Режим GitHub Pages: используем демо-данные');
  console.log('💡 Чтобы показать реальное меню, нужно развернуть бэкенд в облаке');
  return mockMenuData;
};

// СЕРВИС ДЛЯ РАБОТЫ С МЕНЮ
export const menuService = {
  async getDishes() {
    return await getApiData();
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

// СЕРВИС ДЛЯ БРОНИРОВАНИЙ
export const reservationService = {
  async getAll() {
    if (isLocalhost) {
      try {
        const response = await axios.get('http://localhost:5277/api/reservation');
        return response.data;
      } catch (error) {
        console.error('Ошибка получения бронирований:', error);
        return [];
      }
    }
    return [];
  },
  
  async create(reservation) {
    if (isLocalhost) {
      try {
        await axios.post('http://localhost:5277/api/reservation', reservation);
        return { 
          success: true, 
          message: 'Бронирование успешно отправлено!' 
        };
      } catch (error) {
        console.error('Ошибка бронирования:', error);
        return { 
          success: false, 
          message: 'Ошибка при отправке' 
        };
      }
    }
    
    // Для GitHub Pages - демо-режим
    console.log('📅 Демо-бронирование:', reservation);
    return { 
      success: true, 
      message: 'Демо-режим: бронирование имитировано (на GitHub Pages)' 
    };
  }
};

export default {
  menuService,
  reservationService
};