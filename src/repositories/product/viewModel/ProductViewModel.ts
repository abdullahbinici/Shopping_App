import { action, observable } from 'mobx';
import { injectable } from 'inversify';
import { ProductRepository } from '../business/ProductRepository';
import { ProductModel } from '../model/ProductModel';
import { AddProductRequest, FetchProductRequestSingle } from '../../../service/ApiInterface';
import 'reflect-metadata';

@injectable()
export class ProductViewModel {
  @observable product: ProductModel | null = null;
  @observable products: ProductModel[] = [];
  @observable loading: boolean = false;
  @observable error: string = '';

  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  @action
  async fetchProduct() {
    this.loading = true;
    try {
      // const request: FetchProductRequest = { };
      this.products = await this.productRepository.fetchProduct();
    } catch (err) {
      if (err instanceof Error) {
        this.error = err.message;
      } else {
        this.error = String(err);
      }
    } finally {
      this.loading = false;
    }
  }

  // @action
  // async loadProductByIdAndName(id: number, name: string) {
  //   this.loading = true;
  //   try {
  //     const request: FetchProductRequestSingle = { id, name };
  //     this.product = await this.productRepository.fetchProductByIdAndName(request);
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       this.error = err.message;
  //     } else {
  //       this.error = String(err);
  //     }
  //   } finally {
  //     this.loading = false;
  //   }
  // }

  // @action
  // async addProduct(name: string, price: number) {
  //   this.loading = true;
  //   try {
  //     const request: AddProductRequest = { name, price };
  //     this.product = await this.productRepository.addProduct(request);
  //     this.loadLocalProducts(); // Ürün eklendikten sonra yerel veritabanından ürünleri yeniden yükle
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       this.error = err.message;
  //     } else {
  //       this.error = String(err);
  //     }
  //   } finally {
  //     this.loading = false;
  //   }
  // }

  // @action
  // async loadLocalProducts() {
  //   this.loading = true;
  //   try {
   //    this.products = await this.productRepository.getLocalProducts();
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       this.error = err.message;
  //     } else {
  //       this.error = String(err);
  //     }
  //   } finally {
  //     this.loading = false;
  //   }
  // }

  // @action
  // async resetDatabase() {
  //   this.loading = true;
  //   try {
  //     await this.productRepository.resetDatabase();
  //     this.loadLocalProducts(); // Veritabanı sıfırlandıktan sonra ürünleri yeniden yükle
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       this.error = err.message;
  //     } else {
  //       this.error = String(err);
  //     }
  //   } finally {
  //     this.loading = false;
  //   }
  // }
}