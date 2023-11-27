/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Account from './screens/Account';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './context/authcontext/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './constants/CustomDrawer';
import ProductDetail from './screens/ProductDetail';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategorizedProducts from './screens/CategorizedProducts';
import {CartProvider} from './context/product/CartContext';
import ShoppingCart from './screens/ShoppingCart';
import M from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          color: 'black',
          fontSize: 15,
        },
        tabBarStyle: {
          padding: 12,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Shop"
        component={Home}
        options={{
          tabBarIcon: () => {
            return (
              <View style={style.center}>
                <AntDesign name="home" color={'#152837'} size={30} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => {
            return (
              <View style={style.center}>
                <M name="account-circle" color={'#152837'} size={30} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
function MyStack({isSignedIn}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen
        name="CategorizedProducts"
        component={CategorizedProducts}
      />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart}></Stack.Screen>
    </Stack.Navigator>
  );
}

function App() {
  let [isLoading, setIsLoading] = useState(false);
  let [userToken, setUserToken] = useState(false);

  useEffect(() => {
    const getAccessToken = async () => {
      const value = await AsyncStorage.getItem('access');
      setUserToken(value);
    };
    // AsyncStorage.clear();
    getAccessToken().catch();
  }, [userToken]);

  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          {/* <AuthProvider> */}
          <MyStack isSignedIn={userToken ? true : false} />
          {/* </AuthProvider> */}
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
