export interface IJsonParsable<T> {
    fromJson(json: any): T;
  }
  