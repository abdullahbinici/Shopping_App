import axios, { AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';
import { HttpMethod} from './enums/enums';
import { Endpoints } from './enums/ApiRoutes';

@injectable()
export class ApiService {
  private baseUrl: string = process.env.API_URL!;

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
