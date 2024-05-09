import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
// import { TextInput } from 'react-native-paper'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CartContext from '../../context/product/CartContext';

export default function ProductCartCardEdit(props) {

    const {increaseItem} = useContext(CartContext)
    const {decreaseItem} = useContext(CartContext)

    return (        
        <View style={style.searchbar_container}>
            <View style={style.searchbar_subcontainer}>
                <TouchableOpacity onPress={() => increaseItem(props.itemId)}>
                    <FontAwesome6 name={'plus'} size={16} color={'black'} />
                </TouchableOpacity>
                <Text style={style.searchbar_subcontainer}>1</Text>
                <TouchableOpacity onPress={() => decreaseItem(props.itemId)}>
                    <FontAwesome6 name={'minus'} size={16} color={'black'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create(
    {
        searchbar_container: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 8,
            justifyContent: 'center',
            marginLeft: 8
        },
        searchbar_subcontainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            fontSize: 20,
            gap: 10,
            color: 'black',
            padding: 8,
        }
    }
)
