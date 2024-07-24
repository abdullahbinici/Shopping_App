import axios, { AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';
import { HttpMethod} from './enums/enums';
import { Endpoints } from './enums/ApiRoutes';
import { IJsonParsable } from '../../models/IJsonParsable';

@injectable()
export class ApiService {
  private baseUrl: string = process.env.EXPO_PUBLIC_KARGOMOBIL!;

  async sendRequest(
    endpoint: Endpoints,
    method: HttpMethod,
    params: any,
    pathParams: Record<string, any> = {}
  ): Promise<any> {
    let url = `${this.baseUrl}${endpoint}`;
    
    // Path parametrelerini URL'de değiştir
    Object.keys(pathParams).forEach((key) => {
      url = url.replace(`:${key}`, pathParams[key]);
    });

    const config: AxiosRequestConfig = {
      url,
      method: method,
      ...(method === HttpMethod.GET ? { params } : { data: params })
    };

    try {
      console.log(config);
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios hatası
        throw new Error(error.response ? error.response.data.message : error.message);
      } else if (error instanceof Error) {
        // Native hata
        throw new Error(error.message);
      } else {
        // Bilinmeyen hata
        throw new Error('Bilinmeyen bir hata oluştu');
      }
    }
  }
}


// @injectable()
// export class ApiService {
//   private baseUrl: string = process.env.EXPO_PUBLIC_KARGOMOBIL!;

//   async sendRequest<T extends IJsonParsable<T>>(
//     endpoint: Endpoints,
//     method: HttpMethod,
//     params: any,
//     parseModel: new () => T,
//     pathParams: Record<string, any> = {}
//   ): Promise<T> {
//     let url = `${this.baseUrl}${endpoint}`;
    
//     // Path parametrelerini URL'de değiştir
//     Object.keys(pathParams).forEach((key) => {
//       url = url.replace(`:${key}`, pathParams[key]);
//     });

//     const config: AxiosRequestConfig = {
//       url,
//       method: method,
//       ...(method === HttpMethod.GET ? { params } : { data: params })
//     };

//     try {
//       const response = await axios.request(config);
//       const modelInstance = new parseModel();
//       return modelInstance.fromJson(response.data);
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         // Axios error
//         throw new Error(error.response ? error.response.data.message : error.message);
//       } else if (error instanceof Error) {
//         // Native error
//         throw new Error(error.message);
//       } else {
//         // Unknown error
//         throw new Error('An unknown error occurred');
//       }
//     }
//   }
// }