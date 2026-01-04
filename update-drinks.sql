-- Обновляем напитки с двумя объемами и ценами
USE ChinchDB;

-- ФИЛЬТР-КОФЕ
UPDATE Dishes 
SET volumeInfo = '250 мл | 350 мл',
    basePrice = '240 р | 260 р'
WHERE Name LIKE '%ФИЛЬТР-КОФЕ%';

-- КАПУЧИНО
UPDATE Dishes 
SET volumeInfo = '250 мл | 350 мл',
    basePrice = '280 р | 330 р'
WHERE Name LIKE '%КАПУЧИНО%' AND Name NOT LIKE '%РАФ%';

-- ЛАТТЕ (обычный)
UPDATE Dishes 
SET volumeInfo = '350 мл | 450 мл',
    basePrice = '310 р | 350 р'
WHERE Name LIKE '%ЛАТТЕ%' 
  AND Name NOT LIKE '%МАТЧА%' 
  AND Name NOT LIKE '%СИНГАПУР%' 
  AND Name NOT LIKE '%БЕЛЫЙ%' 
  AND Name NOT LIKE '%ПТИЧЬЕ%'
  AND Name NOT LIKE '%АРАХИС%'
  AND Name NOT LIKE '%ИМБИРНЫЙ%';

-- РАФ (обычный)
UPDATE Dishes 
SET volumeInfo = '350 мл',
    basePrice = '420 р'
WHERE Name LIKE '%РАФ%' 
  AND Name NOT LIKE '%CHINCH%' 
  AND Name NOT LIKE '%МАСАЛА%';

-- МАТЧА ЛАТТЕ
UPDATE Dishes 
SET volumeInfo = '250 мл | 350 мл',
    basePrice = '330 р | 380 р'
WHERE Name LIKE '%МАТЧА ЛАТТЕ%';

-- Проверим изменения
SELECT Name, volumeInfo, basePrice 
FROM Dishes 
WHERE SubCategory = 'КОФЕ'
ORDER BY Name;
