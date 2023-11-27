import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decode as atob, encode as btoa } from 'base-64'
import { useNavigation } from '@react-navigation/native';

const AuthContext = React.createContext();
import IP from '../../ip'

const API_HOST = `http://${IP}/account_authentication/`
// const API_HOST = 'http://10.0.2.2:8000/account_authentication/'

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation()

  let [user, setUser] = useState('');
  let [token, setToken] = useState('');
  let [loading, setLoading] = useState(false)
  let [userID, setUserID] = useState(0)
  useEffect(
    () => {
      setLoading(true)
      const token = getAccessToken().then(
        (data) => {
          if (data != null) {
            setToken(data);
            const jwtHeader = atob(data.split('.')[1]);
            setUser(jwtHeader.username)
            setUserID(jwtHeader.user_id)
            navigation.navigate('Home')
          }
        }
      )
      setLoading(false)
    }
    , [])

  const _storeData = async (token) => {
    try {
      await AsyncStorage.setItem(
        'access', token.access
      );
    } catch (error) {
      // Error saving data
    }
  };

  const getAccessToken = async () => {
    const value = await AsyncStorage.getItem('access')
    return value
  }

  const login = async (username, password) => {
    let response = await fetch(`${API_HOST}api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password: password }),
    });
    var data = await response.json();
    if (response.status === 200) {
      _storeData(data)
      const value = await getAccessToken()
      setToken(value)
      navigation.navigate('Home')
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('access')
    setUser('')
    setToken('')
    setUserID('')
    navigation.navigate('Login')
  }

  const contextData = {
    login: login,
    user: user,
    getAccessToken: getAccessToken,
    userID: userID,
    logout: logout
  }

  return (
    <AuthContext.Provider value={contextData}>
      {!loading && children}
    </AuthContext.Provider>
  );
}