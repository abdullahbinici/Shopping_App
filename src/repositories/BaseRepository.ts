import DbManager from '../core/db/DbManager';

export class BaseRepository<T extends object> {
  protected dbManager: DbManager;

  constructor() {
    this.dbManager = DbManager.getInstance();
  }

  protected async executeQuery(query: string, params: any[] = []): Promise<any> {
    return await this.dbManager.executeSql(query, params);
  }

  public async create(item: T, tableName: string): Promise<void> {
    const keys = Object.keys(item).join(', ');
    const values = Object.values(item);
    const placeholders = values.map(() => '?').join(', ');

    const query = `INSERT INTO ${tableName} (${keys}) VALUES (${placeholders})`;

    await this.executeQuery(query, values);
  }

  public async read(tableName: string, conditions: string = '', params: any[] = []): Promise<T[]> {
    const query = `SELECT * FROM ${tableName} ${conditions}`;
    const results = await this.executeQuery(query, params);

    const items: T[] = [];
    for (let i = 0; i < results.rows.length; i++) {
      items.push(results.rows.item(i));
    }
    return items;
  }

  public async update(item: T, tableName: string, id: number): Promise<void> {
    const keys = Object.keys(item).map(key => `${key} = ?`).join(', ');
    const values = Object.values(item);

    const query = `UPDATE ${tableName} SET ${keys} WHERE id = ?`;
    await this.executeQuery(query, [...values, id]);
  }

  public async delete(tableName: string, id: number): Promise<void> {
    const query = `DELETE FROM ${tableName} WHERE id = ?`;
    await this.executeQuery(query, [id]);
  }
}
