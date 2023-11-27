import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import AuthContext from '../../context/authcontext/AuthContext';
import base64 from 'react-native-base64'
import CategoryCard from './CategoryCard';
import ProductContext from '../../context/product/ProductContext';
import IP from '../../ip'


const API_HOST = `http://${IP}/api/products/main-categories`

// const API_HOST = "http://192.168.100.38:8000/api/products/main-categories";
// const API_HOST = 'http://10.0.2.2:8000/api/products/main-categories'

export default function Category() {
    
    const {getAccessToken} = useContext(AuthContext);
    const {categories} = useContext(ProductContext);
    const {currentCategory} = useContext(ProductContext)
    const {setCurrentCategory} = useContext(ProductContext)
    // const [categories, setCategories] = useState()

    // useEffect(
    //   () => {
    //     const fetchCategory = async () => {

    //       let response = await fetch(API_HOST, {
    //           method: "GET",
    //           headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + String(await getAccessToken()),
    //             },
    //         });
    //         var data = await response.json();
    //         if (response.status === 200 ) {
    //           setCategories(data)
    //           console.log(data)
    //           return;
    //         }
    //   }
    //     fetchCategory();
    //   }
    // , [])

    
    return (
    <View style={style.categories_container}>
      <Text style={style.category_header_title}>
        Explore Popular Categories
      </Text>
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}

      contentContainerStyle={style.categories_subcontainer}
      >
      {
        categories && categories.map(
          category => {
            return <TouchableOpacity onPress={
              () => {
                setCurrentCategory(category)
              }
            }  key={category.id}>
              <CategoryCard cardWidth='48%' current={category.id == currentCategory.id} name={category.name}></CategoryCard>
            </TouchableOpacity>
          }
        )
      }
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create(
  {
    categories_container: {
      paddingHorizontal: 20,
    },
    category_header_title: {
      color: 'black',
      fontSize: 24,
      fontWeight: '400',
      marginLeft: 5,
      letterSpacing: -1.5,
      lineHeight: 37.5,
    },
    categories_subcontainer: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)