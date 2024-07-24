// API İstek Arayüzleri
export interface FetchProductRequestSingle {
    id: number;
    name: string;
  }

  export interface FetchProductRequestCategory {
    category: string;
  }
  
  export interface AddProductRequest {
    name: string;
    price: number;
  }
  
  export interface ErrorResponse {
    message: string;
  }
  