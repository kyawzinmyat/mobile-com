import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import IP from '../../ip'

const API_HOST = `http://${IP}/api/products/main-categories`
// const API_HOST = "http://192.168.100.38:8000/api/products/main-categories";
// const API_HOST = 'http://10.0.2.2:8000/api/products/main-categories'

const ProductContext = React.createContext();
export default ProductContext;

export const ProductProvider = ({ children}) => {

    const [currentCategory, setCurrentCategory] = useState('')
    const [categories, setCategories] = useState()
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState()
   
    const getAccessToken = async () => {
        const value = await AsyncStorage.getItem('access')
        return value
      }
    
    useEffect(
        () => {
          const fetchCategory = async () => {
            setLoading(true)
            let response = await fetch(API_HOST, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + String(await getAccessToken()),
                  },
              });
              var data = await response.json();
              setLoading(false)
              if (response.status === 200 ) {
                setCategories(data)
                setCurrentCategory(data && data[0])
                if (currentCategory != undefined) setLoading(false)
                return;
              }
        }
          fetchCategory();
        }
      , [])
  

    const contextData = {
        currentCategory: currentCategory,
        setCurrentCategory: setCurrentCategory,
        categories: categories
    }

    return (
        <ProductContext.Provider value={contextData}>
            {!loading && children}
        </ProductContext.Provider>
    )
}