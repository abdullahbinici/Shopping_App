import { useState, useEffect } from "react";
import { CardRepository } from "../../repositories/card/business/CartRepository";

function cartHook(){
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const cardRepository = new CardRepository();

    const fetchData = async () => {
        setLoading(true);
        try {
          const data = await cardRepository.getAllCard();
          setData(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : String(err));
        } finally {
          setLoading(false);
        }
    }

        useEffect(() => {
        fetchData(); // çağrıyı gerçekleştirdik
    }, []);

    return {error, loading, data, refetch: fetchData}
}
 
export default cartHook;