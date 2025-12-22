-- Добавляем основные блюда из яиц
INSERT INTO EggDishes (Name) VALUES
(N'Глазунья'),
(N'Скрэмбл'),
(N'Омлет');

-- Добавляем дополнения
INSERT INTO EggAddons (Name) VALUES
(N'Лосось'),
(N'Креветки'),
(N'Краб'),
(N'Пастрами'),
(N'Индейка'),
(N'Хашбраун'),
(N'Пармезан'),
(N'Фета'),
(N'Страчателла'),
(N'Крем-чиз'),
(N'Авокадо'),
(N'Салат из томатов'),
(N'Шпинат');

-- Связываем все дополнения со всеми основными блюдами
-- (предполагаем, что все дополнения подходят ко всем блюдам)
INSERT INTO EggDishAddons (EggDishId, EggAddonId)
SELECT d.Id, a.Id
FROM EggDishes d
CROSS JOIN EggAddons a;
