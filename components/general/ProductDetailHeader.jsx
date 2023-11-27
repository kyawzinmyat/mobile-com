import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function ProductDetailHeader({ navigtion }) {
  return (
    <View>
      <View style={style.product_detail_header}>
        <TouchableOpacity onPress={
          () => {
            navigtion.goBack()
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
          Detail
        </Text>
        <View style={style.product_detail_header_subcontainer}>
          <FontAwesome6 name='cart-shopping' color={'black'} size={25} />
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create(
  {
    product_detail_header: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    product_detail_header_subcontainer: {
      flexDirection: 'row',
      gap: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#F7F7F7",
      borderRadius: 8,
      padding: 8
    }
  }
)
