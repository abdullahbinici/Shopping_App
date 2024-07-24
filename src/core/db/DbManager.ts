import * as SQLite from 'expo-sqlite';
import { createTablesScript, dropTablesScript } from './dbScripts';

class DbManager {
  private static instance: DbManager;
  private db: SQLite.Database;

  private constructor() {
    this.db = SQLite.openDatabase('mydatabase.db');
    this.initializeDatabase();
  }

  public static getInstance(): DbManager {
    if (!DbManager.instance) {
      DbManager.instance = new DbManager();
    }
    return DbManager.instance;
  }

  private initializeDatabase(): void {
    this.db.transaction(tx => {
      tx.executeSql(
        createTablesScript,
        [],
        () => {
          console.log('Tables created successfully');
        },
        (_, error) => {
          console.log('Error creating tables: ', error);
          return false;
        }
      );
    });
  }

  public async resetDatabase(): Promise<void> {
    await this.executeSql(dropTablesScript);
    this.initializeDatabase();
  }

  public executeSql(query: string, params: any[] = []): Promise<SQLite.SQLResultSet> {
    return new Promise((resolve, reject) => {
      this.db.transaction(tx => {
        tx.executeSql(
          query,
          params,
          (_, results) => {
            resolve(results);
          },
          (_, error) => {
            reject(error);
            return false;
          }
        );
      });
    });
  }
}

export default DbManager;
