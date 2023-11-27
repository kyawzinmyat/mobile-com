import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ShoppingCart from '../ShoppingCart';
import { useNavigation } from '@react-navigation/native';

export default function BackTitleCartHeader({ title, cart }) {
  const navigation = useNavigation()
  return (
    <View>
      <View style={style.product_detail_header}>
        <TouchableOpacity onPress={
          () => {
            navigation.goBack()
          }
        }>
          <View style={{
            backgroundColor: "#F7F7F7",
            borderRadius: 8,
            padding: 8
          }}>
            <AntDesign color='black' name='left' size={30} />
          </View>
        </TouchableOpacity>
        <Text style={{
          fontSize: 20,
          color: 'black',
          fontWeight: '600',
          justifyContent: 'center'
        }}>
          {title}
        </Text>
        {
          cart && <View style={style.product_detail_header_subcontainer}>
            <ShoppingCart navigation={navigation}></ShoppingCart>
          </View>
        }
      </View>
    </View>
  )
}

const style = StyleSheet.create(
  {
    product_detail_header: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    product_detail_header_subcontainer: {
      // flexDirection: 'row',
      // gap: 30,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: "#F7F7F7",
      // borderRadius: 8,
      // paddingHorizontal: 12
    }
  }
)
