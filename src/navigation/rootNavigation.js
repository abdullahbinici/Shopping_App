import React from 'react'
import { NavigationContainer }  from '@react-navigation/native'
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import { CartProvider } from '../context/CartContext';

const rootNavigation = () => {

    //login yöntemleri oluşturulduğunda burası dinamik olarak kullanılacak. şimdilik deafult true verdik ki 
    //direkt homepage açılsın
    const isAuth = true;

    return(
        <CartProvider>
        <NavigationContainer>
            {
                !isAuth
                    ? <AuthStack/>
                    : <UserStack/>
            }
        </NavigationContainer>
        </CartProvider>
    )
}

export default rootNavigation
