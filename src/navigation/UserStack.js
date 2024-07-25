import { Products, Detail, CartScreen }  from '../pages'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, TouchableOpacity  } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator initialRouteName="ProductsPage">
      <Stack.Screen name="ProductsPage" component={Products} options={{ headerShown: false }}  />
      <Stack.Screen name="Detail" component={Detail} options={{ headerShown: true, tabBarStyle: { display: 'none' }  }}  />
    </Stack.Navigator>
  );
}

function CardStack() {
  return (
    <Stack.Navigator initialRouteName="Sepetim">
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: true, tabBarStyle: { display: 'none' } }}/>
    </Stack.Navigator>
  );
}


const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  if (routeName === 'ProductsPage' || routeName === '') {
    return true;
  }
  return false;
}; 

function UserStack() {
  const { cartCount } = useContext(CartContext);

    return(
      <Tab.Navigator
      screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
              let iconSource;
              if (route.name === 'Anasayfa') {
                  iconSource = focused
                      ? require('../assets/home.png')
                      : require('../assets/home.png');
              } else if (route.name === 'Sepetim') {
                  iconSource = focused
                      ? require('../assets/shopping-cart.png')
                      : require('../assets/shopping-cart.png');
              }

              return (
                  <View style={{ position: 'relative' }}>
                      <Image
                          source={iconSource}
                          style={{
                              width: size,
                              height: size,
                              tintColor: color,
                          }}
                      />
                      {route.name === 'Sepetim' && cartCount > 0 && (
                          <View style={{
                              position: 'absolute',
                              right: -10,
                              top: -5,
                              backgroundColor: 'red',
                              borderRadius: 10,
                              width: 20,
                              height: 20,
                              justifyContent: 'center',
                              alignItems: 'center'
                          }}>
                              <Text style={{ color: 'white', fontSize: 12 }}>{cartCount}</Text>
                          </View>
                      )}
                  </View>
              );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
                    height: getTabBarVisibility(route) ? '8%' : 0,
                    paddingBottom: getTabBarVisibility(route) ? 5 : 0,
                    paddingTop: getTabBarVisibility(route) ? 5 : 0,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    display: getTabBarVisibility(route) ? 'flex' : 'none',
                },
          tabBarLabelStyle: {
              fontSize: 12,
          },
          tabBarItemStyle: {
              paddingVertical: 5,
              justifyContent: 'center',
          },
          tabBarButton: (props) => (
              <TouchableOpacity
                  {...props}
                  activeOpacity={0.3}
              />
          ),
      })}
  >
      <Tab.Screen name="Anasayfa" component={ProductsStack} />
      <Tab.Screen name="Sepetim" component={CardStack} />
  </Tab.Navigator>
);
}

export default UserStack