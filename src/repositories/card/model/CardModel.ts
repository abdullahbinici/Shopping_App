import { BaseModel } from '../../../core/models/BaseModel';
import { IJsonParsable } from '../../../core/models/IJsonParsable';

export class CardModel extends BaseModel implements IJsonParsable<CardModel> {
  map(arg0: (item: any) => CardModel): CardModel[] | PromiseLike<CardModel[]> {
    throw new Error('Method not implemented.');
  }
  id?: number;
  product_Id?: number;
  title?: string;
  category?: string;
  price?: number;
  totalNumberOfCards?: number;
  image?: string;

  constructor(product_Id?: number, title?: string, category?: string, price?: number, image?: string) {
    super();
    this.product_Id = product_Id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.image = image;
  }

//   fromJson(json: any): this {
//     this.id = json.id;
//     this.title = json.title;
//     this.price = json.price;
//     this.totalNumberOfCards = json.totalNumberOfCards;
//     this.image = json.image;
//     return this;
//   }
  toJson(): any {
    return {
      product_Id: this.product_Id,
      title: this.title,
      category: this.category,
      price: this.price,
      image: this.image
    };
  }
}
