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
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false
  },
  {
    id: 2, name: "ПАСТРАМИ, ХАШБРАУН, ШПИНАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "730 р", options: null, isAddon: false
  },
  {
    id: 3, name: "КРОКЕТЫ БАТАТ, ЛОСОСЬ, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false
  },
  {
    id: 4, name: "КРОКЕТЫ КРАБ, КЛУБНИКА, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "1190 р", options: null, isAddon: false
  },
  {
    id: 5, name: "ОЛАДЬИ ИЗ ЦУКИНИ, ЛОСОСЬ, СТРАЧАТЕЛЛА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false
  },
  {
    id: 6, name: "ШАКШУКА, КОЛБАСКИ, ФЕТА, ШПИНАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "770 р", options: null, isAddon: false
  },
  {
    id: 7, name: "ФРАНЦУЗСКИЙ ОМЛЕТ, ИНДЕЙКА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false
  },
  {
    id: 8, name: "ОВСЯНАЯ КАША, ГОЛУБИКА, БАНАН",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 9, name: "РИСОВАЯ КАША, КЛУБНИКА, ГРАНОЛА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "480 р", options: null, isAddon: false
  },
  {
    id: 10, name: "ПАНИНИ, ПАСТРАМИ, ТОМАТ, ГАУДА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false
  },
  {
    id: 11, name: "КРУАССАН, ЛОСОСЬ, КРЕМ-ЧИЗ, АВОКАДО",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "630 р", options: null, isAddon: false
  },
  {
    id: 12, name: "КРУАССАН, ИНДЕЙКА, СКРЭМБЛ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "650 р", options: null, isAddon: false
  },
  {
    id: 13, name: "КРУАССАН, ТРЮФЕЛЬ, СТРАЧАТЕЛЛА, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false
  },
  {
    id: 14, name: "СЫРНИКИ, КЛУБНИКА, ЛИМОННАЯ СМЕТАНА",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "610 р", options: null, isAddon: false
  },
  {
    id: 15, name: "ЙОГУРТ, ЯГОДЫ, МИНДАЛЬ",
    description: "", priceInfo: "", category: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    mainCategory: "Еда", subCategory: "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ",
    volumeInfo: null, basePrice: "490 р", options: null, isAddon: false
  },

  // NEW YEAR SPECIAL (7 блюд)
  {
    id: 16, name: "БРИОШЬ, РОСТБИФ, ЯЙЦО",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false
  },
  {
    id: 17, name: "САЛАТ РОСТБИФ, КАРТОФЕЛЬ, ПЕЧЕННЫЙ БАКЛАЖАН",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false
  },
  {
    id: 18, name: "ОЛИВЬЕ КРАБ | БРИСКЕТ",
    description: "ПЮРЕ ИЗ ЗЕЛЕНОГО ГОРОШКА, КРАСНАЯ ИКРА",
    priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false
  },
  {
    id: 19, name: "САЛАТ С УТИНОЙ ГРУДКОЙ, ПЕРСИК",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false
  },
  {
    id: 20, name: "ЛОСОСЬ ПОД ШУБОЙ",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "810 р", options: null, isAddon: false
  },
  {
    id: 21, name: "КРУАССАН | БЛИНЫ",
    description: "КРАСНАЯ ИКРА, МАСЛО С ТРАВАМИ",
    priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false
  },
  {
    id: 22, name: "УТИНАЯ ГРУДКА, РАТАТУЙ, МЕД",
    description: "", priceInfo: "", category: "NEW YEAR SPECIAL",
    mainCategory: "Еда", subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null, basePrice: "950 р", options: null, isAddon: false
  },

  // СУПЫ (3 блюда)
  {
    id: 23, name: "КУРИНЫЙ БУЛЬОН, ОРЗО",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 24, name: "ТЫКВЕННЫЙ КРЕМ-СУП, ЛОСОСЬ",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "590 р", options: null, isAddon: false
  },
  {
    id: 25, name: "СЫРНЫЙ КРЕМ-СУП, ИНДЕЙКА",
    description: "", priceInfo: "", category: "СУПЫ",
    mainCategory: "Еда", subCategory: "СУПЫ",
    volumeInfo: null, basePrice: "630 р", options: null, isAddon: false
  },

  // РИМСКАЯ ПИЦЦА (4 блюда)
  {
    id: 26, name: "ЛОСОСЬ, КРАСНАЯ ИКРА, ПАРМЕЗАН",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1750 р", options: null, isAddon: false
  },
  {
    id: 27, name: "ЦЫПЛЕНОК, ПЕСТО, ТОМАТ",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1100 р", options: null, isAddon: false
  },
  {
    id: 28, name: "ПЕППЕРОНИ",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false
  },
  {
    id: 29, name: "ЧЕТЫРЕ СЫРА",
    description: "", priceInfo: "", category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда", subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null, basePrice: "1190 р", options: null, isAddon: false
  },

  // ЗАКУСКИ (12 блюд)
  {
    id: 30, name: "АССОРТИ БРУСКЕТТ, КРУАССАН",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "1090 р", options: null, isAddon: false
  },
  {
    id: 31, name: "ФРИ, ПАРМЕЗАН, ТРЮФЕЛЬ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "370 р", options: null, isAddon: false
  },
  {
    id: 32, name: "БАТАТ ФРИ, ТРЮФЕЛЬНЫЙ МУСС",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 33, name: "МОЦАРЕЛЛА, МЕД, ТРЮФЕЛЬНОЕ МАСЛО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 34, name: "ТАРТАР ТУНЕЦ, КЛУБНИКА, ГРАНАТ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false
  },
  {
    id: 35, name: "СВЕКЛА, ТРЮФЕЛЬ, ФИСТАШКА",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false
  },
  {
    id: 36, name: "БАТАТ, ДЗАДЗИКИ, ЛИМОН",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "570 р", options: null, isAddon: false
  },
  {
    id: 37, name: "ОПАЛЕННЫЙ ТУНЕЦ, ГУАКАМОЛЕ, ТОМАТ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "570 р", options: null, isAddon: false
  },
  {
    id: 38, name: "ЧЕСНОЧНЫЕ КРЕВЕТКИ, ГУАКАМОЛЕ",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false
  },
  {
    id: 39, name: "ЛЬНЯНОЙ ХЛЕБ, КРАБ, СТРАЧАТЕЛЛА",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false
  },
  {
    id: 40, name: "РОСТБИФ, СОУС ТОННАТО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "950 р", options: null, isAddon: false
  },
  {
    id: 41, name: "ЗАПЕЧЕННЫЕ ПЕРЦЫ, СОУС ТОННАТО",
    description: "", priceInfo: "", category: "ЗАКУСКИ",
    mainCategory: "Еда", subCategory: "ЗАКУСКИ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false
  },

  // САЛАТЫ (5 блюд)
  {
    id: 42, name: "ГРЕЧЕСКИЙ САЛАТ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "670 р", options: null, isAddon: false
  },
  {
    id: 43, name: "ЗЕЛЕНЫЙ САЛАТ, ЛОСОСЬ, ПАРМЕЗАН",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "690 р", options: null, isAddon: false
  },
  {
    id: 44, name: "КРАБ, СТРАЧАТЕЛЛА, ТОМАТ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "950 р", options: null, isAddon: false
  },
  {
    id: 45, name: "ЦУКИНИ, ТОМАТ, КРЕМ-ЧИЗ",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "650 р", options: null, isAddon: false
  },
  {
    id: 46, name: "ЗЕЛЕНЫЙ САЛАТ, ТУНЕЦ, ЯЙЦО",
    description: "", priceInfo: "", category: "САЛАТЫ",
    mainCategory: "Еда", subCategory: "САЛАТЫ",
    volumeInfo: null, basePrice: "750 р", options: null, isAddon: false
  },

  // НА ГОРЯЧЕЕ (9 блюд)
  {
    id: 47, name: "КРЕВЕТКИ, КАРТОФЕЛЬ, ПЕСТО",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "870 р", options: null, isAddon: false
  },
  {
    id: 48, name: "ГОВЯЖЬИ ЩЕКИ, ОРЗО, ШПИНАТ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false
  },
  {
    id: 49, name: "БИФШТЕКС, ТОЛЧЕНЫЙ КАРТОФЕЛЬ, ЛИМОННАЯ СМЕТАНА",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "890 р", options: null, isAddon: false
  },
  {
    id: 50, name: "БРИСКЕТ, ЙОГУРТ, КАРТОФЕЛЬ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false
  },
  {
    id: 51, name: "ОРЗО, КРЕВЕТКИ, ТРЮФЕЛЬ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false
  },
  {
    id: 52, name: "ЛОСОСЬ НА ГРИЛЕ, ПЮРЕ ИЗ ЦВЕТНОЙ КАПУСТЫ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "1190 р", options: null, isAddon: false
  },
  {
    id: 53, name: "СПАГЕТТИ ИЗ ЦУКИНИ, КРЕВЕТКИ, ТОМАТ",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "870 р", options: null, isAddon: false
  },
  {
    id: 54, name: "БУРГЕР. ГОВЯДИНА, РУККОЛА, ГОРГОНЗОЛА",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "790 р", options: null, isAddon: false
  },
  {
    id: 55, name: "ПАСТА ТОРТИЛЬОНИ, ГОВЯЖЬИ ЩЕЧКИ, УСТРИЧНЫЙ СОУС",
    description: "", priceInfo: "", category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null, basePrice: "990 р", options: null, isAddon: false
  },

  // БЛЮДА ИЗ ЯИЦ (1 основное + 13 дополнений = 14 блюд)
  {
    id: 56, name: "ГЛАЗУНЬЯ",
    description: "Яичница глазунья", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main"
  },
  {
    id: 56.1, name: "СКРЭМБЛ",
    description: "Взбитые яйца", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main"
  },
  {
    id: 56.2, name: "ОМЛЕТ",
    description: "Французский омлет", priceInfo: "", category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: false, eggType: "main"
  },
  {
    id: 57, name: "+ ЛОСОСЬ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "350 р", options: null, isAddon: true
  },
  {
    id: 58, name: "+ КРЕВЕТКИ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "330 р", options: null, isAddon: true
  },
  {
    id: 59, name: "+ КРАБ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "450 р", options: null, isAddon: true
  },
  {
    id: 60, name: "+ ПАСТРАМИ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "290 р", options: null, isAddon: true
  },
  {
    id: 61, name: "+ ИНДЕЙКА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "290 р", options: null, isAddon: true
  },
  {
    id: 62, name: "+ ХАШБРАУН",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: true
  },
  {
    id: 63, name: "+ ПАРМЕЗАН",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true
  },
  {
    id: 64, name: "+ ФЕТА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true
  },
  {
    id: 65, name: "+ СТРАЧАТЕЛЛА",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true
  },
  {
    id: 66, name: "+ КРЕМ-ЧИЗ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "230 р", options: null, isAddon: true
  },
  {
    id: 67, name: "+ АВОКАДО",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true
  },
  {
    id: 68, name: "+ САЛАТ ИЗ ТОМАТОВ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "270 р", options: null, isAddon: true
  },
  {
    id: 69, name: "+ ШПИНАТ",
    description: "Дополнение к яичным блюдам", priceInfo: "", 
    category: "БЛЮДА ИЗ ЯИЦ", mainCategory: "Еда", subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null, basePrice: "250 р", options: null, isAddon: true
  },

  // ============ НАПИТКИ ============

  // КОФЕ (19 напитков)
  {
    id: 70, name: "ЭСПРЕССО",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "35мл", basePrice: "230 р", options: null, isAddon: false
  },
  {
    id: 71, name: "АМЕРИКАНО",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250мл", basePrice: "250 р", options: null, isAddon: false
  },
  {
    id: 72, name: "ФИЛЬТР-КОФЕ",
    description: "", priceInfo: "240 | 260 р", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250 | 350 мл", basePrice: null, options: null, isAddon: false
  },
  {
    id: 73, name: "КАПУЧИНО",
    description: "", priceInfo: "280 | 330 р", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250 | 350 мл", basePrice: null, options: null, isAddon: false
  },
  {
    id: 74, name: "ЛАТТЕ",
    description: "", priceInfo: "310 | 350 р", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 | 450 мл", basePrice: null, options: null, isAddon: false
  },
  {
    id: 75, name: "ФЛЭТ УАЙТ",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250мл", basePrice: "330 р", options: null, isAddon: false
  },
  {
    id: 76, name: "РАФ",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350мл", basePrice: "420 р", options: "ВАНИЛЬ | ЦИТРУС | ПРАГА | ХАЛВА", isAddon: false
  },
  {
    id: 77, name: "PAФ CHINCH",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 78, name: "МАТЧА ЛАТТЕ",
    description: "", priceInfo: "330 | 380 р", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250 | 350 мл", basePrice: null, options: null, isAddon: false
  },
  {
    id: 79, name: "КАКАО-ШОКОЛАД",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "370 р", options: null, isAddon: false
  },
  {
    id: 80, name: "БЕЛЫЙ КАКАО, ФИСТАШКА, СОЛЬ",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false
  },
  {
    id: 81, name: "ЛАТТЕ СИНГАПУР",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 82, name: "ЛАТТЕ, БЕЛЫЙ ШОКОЛАД, ФИСТАШКА",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false
  },
  {
    id: 83, name: "ЛАТТЕ ПТИЧЬЕ МОЛОКО",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false
  },
  {
    id: 84, name: "БАМБЛ-КАРАМЕЛЬ",
    description: "Эспрессо, карамель, молоко", priceInfo: "420 / 450 / 850 р", 
    category: "КОФЕ", mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "250 мл", basePrice: null, options: "ГРЕЙПФРУТ | ГРАНАТ", isAddon: false
  },
  {
    id: 85, name: "ЭСПРЕССО-ТОНИК",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: "350 мл", basePrice: "390 р", options: null, isAddon: false
  },
  {
    id: 86, name: "РАСТИТЕЛЬНОЕ МОЛОКО",
    description: "", priceInfo: "", category: "КОФЕ",
    mainCategory: "Напитки", subCategory: "КОФЕ",
    volumeInfo: null, basePrice: "90 р", options: "КОКОСОВОЕ | МИНДАЛЬНОЕ | ФУНДУЧНОЕ | БАНАНОВОЕ | БЕЗЛАКТОЗНОЕ", isAddon: false
  },

  // ФРЕШ (4 напитка)
  {
    id: 87, name: "АПЕЛЬСИН",
    description: "", priceInfo: "", category: "ФРЕШ",
    mainCategory: "Напитки", subCategory: "ФРЕШ",
    volumeInfo: "200 мл", basePrice: "370 р", options: null, isAddon: false
  },
  {
    id: 88, name: "ГРЕЙПФРУТ",
    description: "", priceInfo: "", category: "ФРЕШ",
    mainCategory: "Напитки", subCategory: "ФРЕШ",
    volumeInfo: "200 мл", basePrice: "370 р", options: null, isAddon: false
  },
  {
    id: 89, name: "МАНДАРИН",
    description: "", priceInfo: "", category: "ФРЕШ",
    mainCategory: "Напитки", subCategory: "ФРЕШ",
    volumeInfo: "200 мл", basePrice: "470 р", options: null, isAddon: false
  },
  {
    id: 90, name: "ГРАНАТ",
    description: "", priceInfo: "", category: "ФРЕШ",
    mainCategory: "Напитки", subCategory: "ФРЕШ",
    volumeInfo: "200 мл", basePrice: "790 р", options: null, isAddon: false
  },

  // SPECIAL (9 напитков)
  {
    id: 91, name: "СИБИРСКИЙ ЛАТТЕ",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 92, name: "РАФ МАСАЛА",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 93, name: "ЛАТТЕ АРАХИС",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false
  },
  {
    id: 94, name: "ЛАТТЕ ИМБИРНЫЙ ПРЯНИК",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "420 р", options: null, isAddon: false
  },
  {
    id: 95, name: "ГЛИНТВЕЙН Б/А, ВИШНЯ, БАРБАРИС",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "250 мл", basePrice: "490 р", options: null, isAddon: false
  },
  {
    id: 96, name: "ЗИМНИЙ БАМБЛ, МАНДАРИН",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "350 мл", basePrice: "490 р", options: null, isAddon: false
  },
  {
    id: 97, name: "АЛТАЙСКИЙ ЧАЙ. КЛЮКВА, МОЖЖЕВЕЛЬНИК",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false
  },
  {
    id: 98, name: "СМОРОДИНА, АПЕЛЬСИН, МАСАЛА",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false
  },
  {
    id: 99, name: "МОРОШКА, ПИХТА, МАЛИНА",
    description: "", priceInfo: "", category: "SPECIAL",
    mainCategory: "Напитки", subCategory: "SPECIAL",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false
  },

  // ХОЛОДНЫЕ НАПИТКИ (10 напитков)
  {
    id: 100, name: "АПЕРОЛЬ Б/А",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 101, name: "ДЮШЕС",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "410 р", options: null, isAddon: false
  },
  {
    id: 102, name: "КЛУБНИКА-МЯТА",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "410 р", options: null, isAddon: false
  },
  {
    id: 103, name: "ГРЕЙПФРУТ, БУРБОНСКАЯ ВАНИЛЬ",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "470 р", options: null, isAddon: false
  },
  {
    id: 104, name: "МАНГО-МАРАКУЙЯ",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 105, name: "МАНГО, МАТЧА, КОКОС",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "470 р", options: null, isAddon: false
  },
  {
    id: 106, name: "ГРЕЙПФРУТ-КЛУБНИКА",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 107, name: "ЗЕЛЕНОЕ ЯБЛОКО, САГАН-ДАЙЛЯ",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "420 р", options: null, isAddon: false
  },
  {
    id: 108, name: "ПЕРСИК, ЛАЙМ, ЭСТРАГОН",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "250 мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 109, name: "СМУЗИ КЛУБНИКА-КОКОС",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "400 мл", basePrice: "450 р", options: null, isAddon: false
  },
  {
    id: 110, name: "СМУЗИ АПЕЛЬСИН-ЧЕРНИКА",
    description: "", priceInfo: "", category: "ХОЛОДНЫЕ НАПИТКИ",
    mainCategory: "Напитки", subCategory: "ХОЛОДНЫЕ НАПИТКИ",
    volumeInfo: "400 мл", basePrice: "450 р", options: null, isAddon: false
  },

  // ЧАЙ / ТИЗАН (11 напитков)
  {
    id: 111, name: "ДАРДЖИЛИНГ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false
  },
  {
    id: 112, name: "ЭРЛ ГРЕЙ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false
  },
  {
    id: 113, name: "СЕНЧА",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false
  },
  {
    id: 114, name: "ЖАСМИН",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false
  },
  {
    id: 115, name: "СБОР ТРАВ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false
  },
  {
    id: 116, name: "ГРЕЧИШНЫЙ ЧАЙ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "390 р", options: null, isAddon: false
  },
  {
    id: 117, name: "ШИПОВНИК-МАЛИНА",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "420 р", options: null, isAddon: false
  },
  {
    id: 118, name: "ГРЕЧИХА-МАНГО",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false
  },
  {
    id: 119, name: "ОБЛЕПИХА-ЦИТРУС",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false
  },
  {
    id: 120, name: "ЧЕРНИКА-БРУСНИКА",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false
  },
  {
    id: 121, name: "МАЛИНА-МАРАКУЙЯ",
    description: "", priceInfo: "", category: "ЧАЙ / ТИЗАН",
    mainCategory: "Напитки", subCategory: "ЧАЙ / ТИЗАН",
    volumeInfo: "500 мл", basePrice: "550 р", options: null, isAddon: false
  },

  // СОК БУТ. (3 напитка)
  {
    id: 122, name: "ЯБЛОКО",
    description: "", priceInfo: "", category: "СОК БУТ.",
    mainCategory: "Напитки", subCategory: "СОК БУТ.",
    volumeInfo: "200 мл", basePrice: "290 р", options: null, isAddon: false
  },
  {
    id: 123, name: "ВИШНЯ",
    description: "", priceInfo: "", category: "СОК БУТ.",
    mainCategory: "Напитки", subCategory: "СОК БУТ.",
    volumeInfo: "200 мл", basePrice: "290 р", options: null, isAddon: false
  },
  {
    id: 124, name: "ПЕРСИК",
    description: "", priceInfo: "", category: "СОК БУТ.",
    mainCategory: "Напитки", subCategory: "СОК БУТ.",
    volumeInfo: "200 мл", basePrice: "290 р", options: null, isAddon: false
  },

  // ВОДА (1 напиток)
  {
    id: 125, name: "MARUHA",
    description: "", priceInfo: "", category: "ВОДА",
    mainCategory: "Напитки", subCategory: "ВОДА",
    volumeInfo: "500 мл", basePrice: "350 р", options: "НЕГАЗИРОВАННАЯ | ГАЗИРОВАННАЯ", isAddon: false
  },

  // ПИВО (6 напитков)
  {
    id: 126, name: "ESTRELLA DAMN",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "490 р", options: null, isAddon: false
  },
  {
    id: 127, name: "INEDIT DAMN",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "490 р", options: null, isAddon: false
  },
  {
    id: 128, name: "CLAUSTHALER",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "390 р", options: null, isAddon: false
  },
  {
    id: 129, name: "LEFFE BRUNE",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "490 р", options: null, isAddon: false
  },
  {
    id: 130, name: "CIDER VAL DE RANCE",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "750 мл", basePrice: "1350 р", options: null, isAddon: false
  },
  {
    id: 131, name: "CIDER GALIPETTE",
    description: "", priceInfo: "", category: "ПИВО",
    mainCategory: "Напитки", subCategory: "ПИВО",
    volumeInfo: "330 мл", basePrice: "790 р", options: null, isAddon: false
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
      message: 'Демо1-режим: бронирование имитировано (на GitHub Pages)' 
    };
  }
};

export default {
  menuService,
  reservationService
};