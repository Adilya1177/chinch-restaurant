#!/bin/bash
# Находим строку с priceInfo в шаблоне и обновляем ее
sed -i '' 's/{{ formatPriceInfo(item.priceInfo) }}/{{ formatPriceInfo(item.priceInfo, item.name) }}/' src/views/MenuView.vue
