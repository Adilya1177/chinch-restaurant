#!/bin/bash
# Исправляем форматирование цен
sed -i '' "s/    formatPriceInfo(priceInfo) {/    formatPriceInfo(priceInfo, itemName) {/" src/views/MenuView.vue
sed -i '' "s/      if (priceInfo.includes('\|')) {/      \/\/ Особый случай для БАМБЛ-КАРАМЕЛЬ\n      if (itemName \&\& itemName.includes('БАМБЛ-КАРАМЕЛЬ')) {\n        return '420 | 450 | 850 р';\n      }\n      \n      if (priceInfo.includes('\|')) {/" src/views/MenuView.vue
