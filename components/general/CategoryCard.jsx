import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CategoryCard(props) {
  
  const style = StyleSheet.create(
    {
      category_card: {
        margin: 5,
        borderRadius: 15,
        width: 100,
        height: props.current ? 65: 60,
        justifyContent: 'center',
        backgroundColor: props.current ? '#040D12': '#E6E5E7'
      },
      category_title_color: {
        color: !props.current ? '#040D12' : '#fff',
        padding: 16,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: props.current ? '600': '400',
      },
    }
  )
  return (
    <View style={style.category_card}>
        <Text style={style.category_title_color}>{props.name}</Text>
    </View>
  )
}
