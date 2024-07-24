import { injectable } from 'inversify';
import { BaseRepository } from '../../BaseRepository';
import { CardModel } from '../model/CardModel';
import "reflect-metadata";

@injectable()
export class CardRepository extends BaseRepository<CardModel> {

public async getAllCard(): Promise<CardModel[]> {
  const query = `
    SELECT id, product_Id, title, category, SUM(price) as price, image, COUNT(id) as totalNumberOfCards 
    FROM Cards 
    GROUP BY product_Id, title, category, image
  `;
  const results = await this.executeQuery(query); 
  
  const rows = results.rows._array;
  
  const cards = rows.map((row: any) => new CardModel().fromJson(row));
  
  console.log(cards);
  return cards; 
} 

  public async deleteOneByProductId(cardId: number): Promise<void> {
      await this.delete('Cards', cardId);
  }

  public async addCard(card: CardModel): Promise<void> {
    console.log("insert");
    console.log(card.toJson());
    await this.create(card.toJson(), 'Cards');
    console.log({card});
  }
} 
