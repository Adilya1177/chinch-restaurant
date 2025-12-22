USE ChinchDB;
GO

-- Удаляем старую таблицу если существует
IF OBJECT_ID('Dishes', 'U') IS NOT NULL
    DROP TABLE Dishes;
GO

-- Создаем новую таблицу с новой структурой
CREATE TABLE Dishes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(MAX) NOT NULL,
    MainCategory NVARCHAR(MAX) NOT NULL,
    SubCategory NVARCHAR(MAX) NOT NULL,
    Volume NVARCHAR(MAX) NULL,
    Options NVARCHAR(MAX) NULL
);
GO

PRINT 'Таблица Dishes создана с новой структурой';
