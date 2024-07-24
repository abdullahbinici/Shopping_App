import { useState, useEffect } from "react";
import { ProductRepository } from '../repositories/product/business/ProductRepository';
import { ApiService } from '../core/network/api/ApiService';

function useFetch(){
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

      // ApiService instance'ını oluşturun
    const apiService = new ApiService();
    const productRepository = new ProductRepository(apiService);

    const fetchData = async () => {
        setLoading(true);
        try {
          const products = await productRepository.fetchProduct();
          setData(products);
        } catch (err) {
          setError(err instanceof Error ? err.message : String(err));
        } finally {
          setLoading(false);
        }
    }

        useEffect(() => {
        fetchData(); // çağrıyı gerçekleştirdik
    }, []);

    return {error, loading, data}
}

export default useFetch;