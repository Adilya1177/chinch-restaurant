#!/bin/bash
# Изменяем метод formatPriceInfo для использования наклонных разделителей
sed -i '' "s/      if (itemName \&\& itemName.includes('БАМБЛ-КАРАМЕЛЬ')) {/      if (itemName \&\& itemName.includes('БАМБЛ-КАРАМЕЛЬ')) {\n        return priceInfo.replace(\/  \/g, ' \/ ');/" src/views/MenuView.vue
