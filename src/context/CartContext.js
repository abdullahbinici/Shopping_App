import React, { createContext, useState, useEffect } from 'react';
//import cardRepository from '../repositories/card/business/CartRepository'; // Adjust the path according to your project structure
import { CardRepository } from '../repositories/card/business/CartRepository';

const cardRepository = new CardRepository();

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const fetchCartCount = async () => {
            const cartItems = await cardRepository.getAllCard();
            setCartCount(cartItems.length);
        };
        fetchCartCount();
    }, []);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
            {children}
        </CartContext.Provider>
    );
};

// export const CartContext = createContext({
//     cartCount: 0,
//     setCartCount: () => {}
// });

// export const CartProvider = ({ children }) => {
//     const [cartCount, setCartCount] = useState(0);

//     useEffect(() => {
//         const fetchCartCount = async () => {
//             const cartItems = await cardRepository.getAllCard();
//             setCartCount(cartItems.length);
//         };
//         fetchCartCount();
//     }, []);

//     return (
//         <CartContext.Provider value={{ cartCount, setCartCount }}>
//             {children}
//         </CartContext.Provider>
//     );
// };