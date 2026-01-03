#!/bin/bash

echo "=== НАЧИНАЕМ ПЕРЕИМЕНОВАНИЕ ФАЙЛОВ ==="
echo ""

# Список файлов для переименования
files=(
  "БРИОШЬ-РОСТБИФ-ЯЙЦО.jpeg"
  "САЛАТ-РОСТБИФ-КАРТОФЕЛЬ-ПЕЧЕННЫЙ-БАКЛАЖАН.jpeg"
  "ЛОСОСЬ-ПОД-ШУБОЙ.jpeg"
  "УТИНАЯ-ГРУДКА-РАТАТУЙ-МЕД.jpeg"
  "ТЫКВЕННЫЙ-КРЕМ-СУП-ЛОСОСЬ.jpeg"
  "СЫРНЫЙ-КРЕМ-СУП-ИНДЕЙКА.jpeg"
  "БАТАТ-ФРИ-ТРЮФЕЛЬНЫЙ-МУСС.jpeg"
  "ТАРТАР-ТУНЕЦ1-КЛУБНИКА-ГРАНАТ.jpeg"
  "ОПАЛЕННЫЙ-ТУНЕЦ-ГУАКАМОЛЕ-ТОМАТ.jpeg"
  "ГРЕЧЕСКИЙ-САЛАТ.jpeg"
  "ЗЕЛЕНЫЙ-САЛАТ-ЛОСОСЬ-ПАРМЕЗАН.jpeg"
  "ЗЕЛЕНЫЙ-САЛАТ-ТУНЕЦ-ЯЙЦО.jpeg"
  "БИФШТЕКС-ТОЛЧЕНЫЙ-КАРТОФЕЛЬ-ЛИМОННАЯ-СМЕТАНА.jpeg"
  "БРИСКЕТ-ЙОГУРТ-КАРТОФЕЛЬ.jpeg"
  "ЛОСОСЬ-НА-ГРИЛЕ-ПЮРЕ-ИЗ-ЦВЕТНОЙ-КАПУСТЫ.jpeg"
  "БУРГЕР.ГОВЯДИНА-РУККОЛА-ГОРГОНЗОЛА.jpeg"
  "ПАСТА-ТОРТИЛЬОНИ-ГОВЯЖЬИ-ЩЕЧКИ-УСТРИЧНЫЙ-СОУС.jpeg"
)

# Функция для транслитерации
to_latin() {
  echo "$1" | sed '
    y/абвгдеёзийклмнопрстуфхцыэ/abvgdeezijklmnoprstufhcye/
    y/АБВГДЕЁЗИЙКЛМНОПРСТУФХЦЫЭ/ABVGDEEZIJKLMNOPRSTUFHCYE/
    y/жчшщъь/zhchshshh__/
    y/ЖЧШЩЪЬ/ZHCHSHSHH__/
    y/юя/juia/
    y/ЮЯ/JUIA/
    s/\./_/g  # Точки заменяем на подчеркивания
  '
}

renamed=0
missing=0

echo "Поиск файлов для переименования..."
echo "-----------------------------------"

for old_file in "${files[@]}"; do
  if [ -f "$old_file" ]; then
    # Создаем новое имя
    base_name="${old_file%.*}"
    extension="${old_file##*.}"
    new_base=$(to_latin "$base_name")
    new_file="${new_base}.${extension}"
    
    echo "Найден: $old_file"
    echo "Переименовываю в: $new_file"
    mv "$old_file" "$new_file"
    echo "✓ Успешно переименован"
    echo ""
    ((renamed++))
  else
    echo "✗ Файл не найден: $old_file"
    echo ""
    ((missing++))
  fi
done

echo "=== ИТОГ ==="
echo "Переименовано: $renamed файлов"
echo "Не найдено: $missing файлов"
echo ""
echo "=== ИНСТРУКЦИЯ ==="
echo "Теперь нужно обновить файл dishDetails.js:"
echo "1. Откройте frontend/src/data/dishDetails.js"
echo "2. Для каждого переименованного файла замените старый путь на новый"
echo "3. Пример: '/chinch-restaurant/images/dishes/БРИОШЬ-РОСТБИФ-ЯЙЦО.jpeg'"
echo "   заменить на: '/chinch-restaurant/images/dishes/BRIOSH-ROSTBIF-JAJCO.jpeg'"
