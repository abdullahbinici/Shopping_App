import { BaseModel } from '../../../core/models/BaseModel';
import { IJsonParsable } from '../../../core/models/IJsonParsable';

export class ProductModel extends BaseModel implements IJsonParsable<ProductModel> {
  map(arg0: (item: any) => ProductModel): ProductModel[] | PromiseLike<ProductModel[]> {
    throw new Error('Method not implemented.');
  }
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;

  fromJson(json: any): this {
    this.id = json.id;
    this.title = json.title;
    this.price = json.price;
    this.description = json.description;
    this.category = json.category;
    this.image = json.image;
    return this;
  }
}
