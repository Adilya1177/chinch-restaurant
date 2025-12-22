#!/bin/bash
# Находим метод и заменяем его полностью
sed -i '' '/formatPriceInfo(priceInfo, itemName) {/,/},/c\
    formatPriceInfo(priceInfo, itemName) {\
      if (!priceInfo) return '"''"';\
      \
      # Для БАМБЛ-КАРАМЕЛЬ: "420 450 850 р" → "420 / 450 / 850 р"\
      if (itemName && itemName.includes('"'"'БАМБЛ-КАРАМЕЛЬ'"'"')) {\
        # Разбиваем по пробелам и собираем обратно с разделителями\
        const parts = priceInfo.match(/\\\\d+/g);\
        if (parts && parts.length === 3) {\
          return `\${parts[0]} / \${parts[1]} / \${parts[2]} р`;\
        }\
        return priceInfo.replace(/\\\\s+/g, " / ");\
      }\
      \
      # Для других напитков с форматом "240 | 260 р" → "240 / 260 р"\
      if (priceInfo.includes('"'"'|'"'"')) {\
        return priceInfo.split('"'"'|'"'"').map(p => p.trim()).join('"'"' / '"'"');\
      }\
      \
      return priceInfo;\
    },' src/views/MenuView.vue
