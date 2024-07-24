import { IJsonParsable } from './IJsonParsable';

export class BaseModel implements IJsonParsable<BaseModel> {
  fromJson(json: any): this {
    Object.assign(this, json);
    return this;
  }
}
