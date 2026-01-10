// Данные для фотографий блюд
const dishDetails = {
  // Блюда с фото
  "АССОРТИ БРУСКЕТТ, КРУАССАН": {
    photo: "/chinch-restaurant/images/dishes/АССОРТИ-БРУСКЕТТ-КРУАССАН.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "БАТАТ ФРИ, ТРЮФЕЛЬНЫЙ МУСС": {
    photo: "/chinch-restaurant/images/dishes/BATAT-FRI-TRYUFELNYJ-MUSS.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "БАТАТ, ДЗАДЗИКИ, ЛИМОН": {
    photo: "/chinch-restaurant/images/dishes/БАТАТ-ДЗАДЗИКИ-ЛИМОН.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "БИФШТЕКС, ТОЛЧЕНЫЙ КАРТОФЕЛЬ, ЛИМОННАЯ СМЕТАНА": {
    photo: "/chinch-restaurant/images/dishes/BIFSTEKS-TOLCHENYJ-KARTOFEL-LIMONNAYA-SMETANA.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "БРИОШЬ, РОСТБИФ, ЯЙЦО": {
    photo: "/chinch-restaurant/images/dishes/BRIOSH-ROSTBIF-JAJCO.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "БРИСКЕТ, ЙОГУРТ, КАРТОФЕЛЬ": {
    photo: "/chinch-restaurant/images/dishes/BRISKET-JOGURT-KARTOFEL.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "БУРГЕР ГОВЯДИНА, РУККОЛА, ГОРГОНЗОЛА": {
    photo: "/chinch-restaurant/images/dishes/BURGER-GOVYADINA-RUKKOLA-GORGONZOLA.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ГРЕЧЕСКИЙ САЛАТ": {
    photo: "/chinch-restaurant/images/dishes/GRECHESKIJ-SALAT.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЗАПЕЧЕННЫЕ ПЕРЦЫ, СОУС ТОННАТО": {
    photo: "/chinch-restaurant/images/dishes/ЗАПЕЧЕННЫЕ-ПЕРЦЫ-СОУС-ТОННАТО.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЗЕЛЕНЫЙ САЛАТ, ЛОСОСЬ, ПАРМЕЗАН": {
    photo: "/chinch-restaurant/images/dishes/ZELENYJ-SALAT-LOSOS-PARMEZAN.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЗЕЛЕНЫЙ САЛАТ, ТУНЕЦ, ЯЙЦО": {
    photo: "/chinch-restaurant/images/dishes/ZELENYJ-SALAT-TUNEC-JAJCO.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЙОГУРТ, ЯГОДЫ, МИНДАЛЬ": {
    photo: "/chinch-restaurant/images/dishes/JOGURT-JAGODY-MINDAL.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "КРАБ, СТРАЧАТЕЛЛА, ТОМАТ": {
    photo: "/chinch-restaurant/images/dishes/КРАБ-СТРАЧАТТЕЛА-ТОМАТ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "КРЕВЕТКИ, КАРТОФЕЛЬ, ПЕСТО": {
    photo: "/chinch-restaurant/images/dishes/КРЕВЕТКИ-КАРТОФЕЛЬ-ПЕСТО.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "КРЕВЕТКИ, ШПИНАТ, АВОКАДО, ТОМАТ": {
    photo: "/chinch-restaurant/images/dishes/КРЕВЕТКИ-ШПИНАТ-АВОКАДО-ТОМАТ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "КРОКЕТЫ БАТАТ, ЛОСОСЬ, ТОМАТ": {
    photo: "/chinch-restaurant/images/dishes/КРОКЕТЫ-БАТАТ-ЛОСОСЬ-ТОМАТ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "КРОКЕТЫ КРАБ, КЛУБНИКА, ТОМАТ": {
    photo: "/chinch-restaurant/images/dishes/КРОКЕТЫ-КРАБ-КЛУБНИКА-ТОМАТ.png",
    composition: "Состав будет добавлен позже"
  },
  "КРУАССАН, ИНДЕЙКА, СКРЭМБЛ": {
    photo: "/chinch-restaurant/images/dishes/КРУАССАН-ИНДЕЙКА-СКРЭМБЛ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "КРУАССАН, ЛОСОСЬ, КРЕМ-ЧИЗ, АВОКАДО": {
    photo: "/chinch-restaurant/images/dishes/КРУАССАН-ЛОСОСЬ-КРЕМ-ЧИЗ-АВОКАДО.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "КРУАССАН, ТРЮФЕЛЬ, СТРАЧАТЕЛЛА, ТОМАТ": {
    photo: "/chinch-restaurant/images/dishes/КРУАССАН-ТРЮФЕЛЬ-СТРАЧАТЕЛЛА-ТОМАТ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЛОСОСЬ НА ГРИЛЕ, ПЮРЕ ИЗ ЦВЕТНОЙ КАПУСТЫ": {
    photo: "/chinch-restaurant/images/dishes/LOSOS-NA-GRILE-PURE-IZ-CVETNOJ-KAPUSTY.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЛОСОСЬ ПОД ШУБОЙ": {
    photo: "/chinch-restaurant/images/dishes/LOSOS-POD-SHUBOJ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЛОСОСЬ, КРАСНАЯ ИКРА, ПАРМЕЗАН": {
    photo: "/chinch-restaurant/images/dishes/ЛОСОСЬ-КРАСНАЯ-ИКРА-ПАРМЕЗАН.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЛЬНЯНОЙ ХЛЕБ, КРАБ, СТРАЧАТЕЛЛА": {
    photo: "/chinch-restaurant/images/dishes/ЛЬНЯНОЙ-ХЛЕБ-КРАБ-СТРАЧАТЕЛЛА.webp",
    composition: "Состав будет добавлен позже"
  },
  "МОЦАРЕЛЛА, МЕД, ТРЮФЕЛЬНОЕ МАСЛО": {
    photo: "/chinch-restaurant/images/dishes/МОЦАРЕЛЛА-МЕД-ТРЮФЕЛЬНОЕ-МАСЛО.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ОВСЯНАЯ КАША, ГОЛУБИКА, БАНАН": {
    photo: "/chinch-restaurant/images/dishes/ОВСЯНАЯ-КАША-ГОЛУБИКА-БАНАН.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ОЛАДЬИ ИЗ ЦУКИНИ, ЛОСОСЬ, СТРАЧАТЕЛЛА": {
    photo: "/chinch-restaurant/images/dishes/ОЛАДЬИ-ИЗ-ЦУКИНИ-ЛОСОСЬ-СТРАЧАТЕЛЛА.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ОПАЛЕННЫЙ ТУНЕЦ, ГУАКАМОЛЕ, ТОМАТ": {
    photo: "/chinch-restaurant/images/dishes/OPALENNYJ-TUNEC-GUAKAMOLE-TOMAT.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ОРЗО, КРЕВЕТКИ, ТРЮФЕЛЬ": {
    photo: "/chinch-restaurant/images/dishes/ОРЗО-КРЕВЕТКИ-ТРЮФЕЛЬ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ПАНИНИ, ПАСТРАМИ, ТОМАТ, ГАУДА": {
    photo: "/chinch-restaurant/images/dishes/ПАНИНИ-ПАСТРАМИ-ТОМАТ-ГАУДА.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ПАСТА ТОРТИЛЬОНИ, ГОВЯЖЬИ ЩЕЧКИ, УСТРИЧНЫЙ СОУС": {
    photo: "/chinch-restaurant/images/dishes/PASTA-TORTILONI-GOVYAJI-SHECHKI-USTRICHNYJ-SAUS.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ПАСТРАМИ, ХАШБРАУН, ШПИНАТ": {
    photo: "/chinch-restaurant/images/dishes/ПАСТРАМИ-ХАШБРАУН-ШПИНАТ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ПЕППЕРОНИ": {
    photo: "/chinch-restaurant/images/dishes/ПЕППЕРОНИ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "РИСОВАЯ КАША, КЛУБНИКА, ГРАНОЛА": {
    photo: "/chinch-restaurant/images/dishes/РИСОВАЯ-КАША-КЛУБНИКА-ГРАНОЛА.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "РОСТБИФ, СОУС ТОННАТО": {
    photo: "/chinch-restaurant/images/dishes/РОСТБИФ-СОУС-ТОННАТО.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "САЛАТ РОСТБИФ, КАРТОФЕЛЬ, ПЕЧЕННЫЙ БАКЛАЖАН": {
    photo: "/chinch-restaurant/images/dishes/SALAT-ROSTBIF-KARTOFEL-PECHENNYJ-BAKLAZHAN.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "САЛАТ С УТИНОЙ ГРУДКОЙ, ПЕРСИК": {
    photo: "/chinch-restaurant/images/dishes/SALAT-S-UTINOJ-GRUDKOJ-PERSIK.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "СВЕКЛА, ТРЮФЕЛЬ, ФИСТАШКА": {
    photo: "/chinch-restaurant/images/dishes/СВЕКЛА-ТРЮФЕЛЬ-ФИСТАШКА.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "СПАГЕТТИ ИЗ ЦУКИНИ, КРЕВЕТКИ, ТОМАТ": {
    photo: "/chinch-restaurant/images/dishes/СПАГЕТТИ-ИЗ-ЦУКИНИ-КРЕВЕТКИ-ТОМАТ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "СЫРНИКИ, КЛУБНИКА, ЛИМОННАЯ СМЕТАНА": {
    photo: "/chinch-restaurant/images/dishes/СЫРНИКИ-КЛУБНИКА-ЛИМОННАЯ-СМЕТАНА.webp",
    composition: "Состав будет добавлен позже"
  },
  "СЫРНЫЙ КРЕМ-СУП, ИНДЕЙКА": {
    photo: "/chinch-restaurant/images/dishes/SYRNYJ-KREM-SUP-INDEJKA.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ТАРТАР ТУНЕЦ, КЛУБНИКА, ГРАНАТ": {
    photo: "/chinch-restaurant/images/dishes/TARTAR-TUNEC-KLUBНИKA-GRANAT.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ТЫКВЕННЫЙ КРЕМ-СУП, ЛОСОСЬ": {
    photo: "/chinch-restaurant/images/dishes/TYKVENNYJ-KREM-SUP-LOSOS.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "УТИНАЯ ГРУДКА, РАТАТУЙ, МЕД": {
    photo: "/chinch-restaurant/images/dishes/UTINAYA-GRUDKA-RATATUJ-MED.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ФРИ, ПАРМЕЗАН, ТРЮФЕЛЬ": {
    photo: "/chinch-restaurant/images/dishes/ФРИ-ПАРМЕЗАН-ТРЮФЕЛЬ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЦУКИНИ, ТОМАТ, КРЕМ-ЧИЗ": {
    photo: "/chinch-restaurant/images/dishes/ЦУКИНИ-ТОМАТ-КРЕМ-ЧИЗ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЦЫПЛЕНОК, ПЕСТО, ТОМАТ": {
    photo: "/chinch-restaurant/images/dishes/ЦЫПЛЕНОК-ПЕСТО-ТОМАТ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЧЕСНОЧНЫЕ КРЕВЕТКИ, ГУАКАМОЛЕ": {
    photo: "/chinch-restaurant/images/dishes/ЧЕСНОЧНЫЕ-КРЕВЕТКИ-ГУАКАМОЛЕ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ЧЕТЫРЕ СЫРА": {
    photo: "/chinch-restaurant/images/dishes/ЧЕТЫРЕ-СЫРА.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ШАКШУКА, КОЛБАСКИ, ФЕТА, ШПИНАТ": {
    photo: "/chinch-restaurant/images/dishes/ШАКШУКА-КОЛБАСКИ-ФЕТА-ШПИНАТ.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ОЛИВЬЕ КРАБ / БРИСКЕТ, ПЮРЕ ИЗ ЗЕЛЕНОГО ГОРОШКА, КРАСНАЯ ИКРА": {
    photo: "/chinch-restaurant/images/dishes/OLIVE-KRAB-BRISKET-PURE-IZ-ZELENOGO-GOROSHKA-KRASNAYA-IKRA.jpeg",
    composition: "Состав будет добавлен позже"
  },
  "ГЛАЗУНЬЯ": {
    photo: "/chinch-restaurant/images/dishes/ГЛАЗУНЬЯ.png",
    composition: "Состав будет добавлен позже"
  },
  "СКРЭМБЛ": {
    photo: "/chinch-restaurant/images/dishes/СКРЭМБЛ.png",
    composition: "Состав будет добавлен позже"
  },
  "ОМЛЕТ": {
    photo: "/chinch-restaurant/images/dishes/ОМЛЕТ.png",
    composition: "Состав будет добавлен позже"
  },
  "КУРИНЫЙ БУЛЬОН, ОРЗО": {
    photo: "/chinch-restaurant/images/dishes/КУРИНЫЙ-БУЛЬОН-ОРЗО.jpg",
    composition: "Состав будет добавлен позже"
  },
  "ГОВЯЖЬИ ЩЕКИ, ОРЗО, ШПИНАТ": {
    photo: "/chinch-restaurant/images/dishes/ГОВЯЖЬИ-ЩЕКИ-ОРЗО-ШПИНАТ.jpg",
    composition: "Состав будет добавлен позже"
  },
  "КРУАССАН / БЛИНЫ, КРАСНАЯ ИКРА, МАСЛО С ТРАВАМИ": {
    photos: [
      "/chinch-restaurant/images/dishes/KRUSSAN-KRASNAYA-IKRA-MASLO-S-TRAVAMI.jpg",
      "/chinch-restaurant/images/dishes/BLINY-KRASNAYA-IKRA-MASLO-S-TRAVAMI.jpg"
    ],
    composition: "Состав будет добавлен позже"
  },
    "ФРАНЦУЗСКИЙ ОМЛЕТ, ИНДЕЙКА": {
    photo: "/chinch-restaurant/images/dishes/FRANTSUZSKIJ-OMLET-INDEJKA.jpg",
    composition: "Состав будет добавлен позже"
  },
};

export function getDishDetails(dishName) {
  if (!dishName) {
    return getDefaultDetails();
  }
  
  const upperDishName = dishName.toUpperCase().trim();
  
  // Точное совпадение
  if (dishDetails[upperDishName]) {
    const details = dishDetails[upperDishName];
    
    // Если есть массив photos, преобразуем в совместимую структуру
    if (details.photos && Array.isArray(details.photos)) {
      return {
        photo: details.photos[0], // первое фото для совместимости
        photos: details.photos,   // полный массив для нового компонента
        composition: details.composition
      };
    }
    
    // Если есть одиночное photo, оставляем как есть
    return details;
  }
  
  // Если не нашли, возвращаем заглушку
  return getDefaultDetails(dishName);
}

// Функция для создания SVG-заглушки
function getDefaultDetails(dishName = '') {
  const displayName = dishName.length > 30 ? dishName.substring(0, 30) + '...' : dishName;
  
  return {
    photo: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#f8f4ea"/>
        <rect x="20" y="20" width="360" height="260" rx="12" fill="#e8dcc9" stroke="#b08d57" stroke-width="2"/>
        <text x="200" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#8b6b4d">
          Фото скоро будет
        </text>
        <text x="200" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#8b6b4d" opacity="0.7">
          ${displayName}
        </text>
        <circle cx="200" cy="210" r="30" fill="#b08d57" opacity="0.1"/>
        <text x="200" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#8b6b4d">🍽️</text>
      </svg>
    `)}`,
    composition: "Состав будет добавлен позже"
  };
}

export default dishDetails;