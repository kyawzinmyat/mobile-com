import React, { useContext } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import AuthContext from '../context/authcontext/AuthContext'
import HomeHeader from '../components/general/HomeHeader';
import Category from '../components/general/Category';
import ProductContext, { ProductProvider } from '../context/product/ProductContext';
import SubCategory from '../components/general/SubCategory';

export default function Home({ navigation }) {

  const { user } = useContext(AuthContext);

  return (
    <ScrollView style={style.main_container}>
      <ProductProvider>
        <HomeHeader navigation={navigation}></HomeHeader>
      </ProductProvider>
      {/* <Category></Category> */}
      <SubCategory navigation={navigation}></SubCategory>
    </ScrollView>
  )
}

const style = StyleSheet.create(
  {
    main_container: {
      flex: 1,
    }
  }
)