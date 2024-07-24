import { injectable } from 'inversify';
import { BaseRepository } from '../../BaseRepository';
import { ProductModel } from '../model/ProductModel';
import { ApiService } from '../../../core/network/api/ApiService';
import { FetchProductRequestCategory } from '../../../service/ApiInterface';
import { HttpMethod } from '../../../core/network/api/enums/enums';
import { Endpoints } from '../../../core/network/api/enums/ApiRoutes';
import "reflect-metadata";


@injectable()
export class ProductRepository extends BaseRepository<ProductModel> {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    super();
    this.apiService = apiService;
  }

  public async fetchProduct(): Promise<ProductModel[]> {
    const response = await this.apiService.sendRequest(
      Endpoints.PRODUCTS,
      HttpMethod.GET,
      {}
    );
    return response.map((item: any) => new ProductModel().fromJson(item));
  }

    public async fetchProductByCategory(request: FetchProductRequestCategory): Promise<ProductModel[]> {
    const response = await this.apiService.sendRequest(
      Endpoints.PRODUCT_BY_CATEGORY,
      HttpMethod.GET,
      {},
      { category: request.category}
    );
    return response.map((item: any) => new ProductModel().fromJson(item));
  }
}
