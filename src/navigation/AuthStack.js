import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        </Stack.Navigator>
    )
}

export default AuthStack
