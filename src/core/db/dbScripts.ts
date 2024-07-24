export const createTablesScript = `
  CREATE TABLE IF NOT EXISTS Cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_Id INTEGER,
    title TEXT,
    category TEXT,
    price REAL,
    totalNumberOfCards INTEGER,
    image TEXT
  );
`;

export const dropTablesScript = `
  DROP TABLE IF EXISTS Cards;
`;