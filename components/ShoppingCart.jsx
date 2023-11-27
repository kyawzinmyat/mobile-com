import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CartContext from '../context/product/CartContext';

export default function ShoppingCart({ navigation }) {

    const {cartCount} = useContext(CartContext);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
            <Text style={
                style.cart_count
            }>{cartCount}</Text>
            <FontAwesome6 style={style.cart_icon} name={'cart-shopping'} size={20} color={'#000000'} />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create(
    {
        cart_icon: {
            backgroundColor: '#F7F7F7',
            borderRadius: 16,
            padding: 16,
            margin: 12,
        },
        cart_count: {
            fontSize: 12,
            color: 'black',
            position: 'absolute',
            right: 15,
            zIndex: 999,
            padding: 0,
            width: 25,
            textAlignVertical: 'center',
            height: 25,
            top: 4,
            textAlign: 'center',
            borderRadius: 20,
            color: '#FFF',
            backgroundColor: '#040D12'
        }
    }
)