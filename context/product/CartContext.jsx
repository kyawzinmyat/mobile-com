import { Text, View } from 'react-native'
import React, { Component, createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../authcontext/AuthContext';

const CartContext = React.createContext();
export default CartContext;

export const CartProvider =  ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    let [loading, setLoading] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const {userID} = useContext(AuthContext)

    useEffect(
        () => {
            loadOrders()

        }
    , [])

    const loadOrders = async () => {
        var orders = JSON.parse(await AsyncStorage.getItem('orders'+userID)) || [];
        console.log(orders)
        setCartItems(orders);
        const numOfItems = computeCartCount(orders)
        setCartCount(numOfItems)
        setSubTotal(computeSubtotal(orders))
    }

    const computeCartCount = (orders) => {
        return orders.reduce(
            (x, item) => x + item.quantity 
        , 0)
    }

    const addItem = async (product) => {
        var orders = JSON.parse(await AsyncStorage.getItem('orders'+userID)) || [];
        var cartItem = orders.find(item => item.id == product.id)
        if (cartItem) cartItem.quantity += 1
        else orders.push(
            {
                ...product,
                quantity: 1,
                total: product.price
            }
        )
        await AsyncStorage.setItem('orders'+userID, JSON.stringify(
            orders
        ))
        setCartItems(orders)
        setCartCount(computeCartCount(orders))
        setSubTotal(computeSubtotal(orders))
    }

    const removeItem = async (product) => {
        var orders = JSON.parse(await AsyncStorage.getItem('orders'+userID)) || [];
        orders = orders.filter(item => item.id != product.id)
        await AsyncStorage.setItem('orders'+userID, JSON.stringify(
            orders
        ))
        setCartItems(orders)
        setCartCount(computeCartCount(orders))
        setSubTotal(computeSubtotal(orders))
    }

    const increaseItem = async (itemId) => {
        const orders =  cartItems.map(
            item => {
                if (itemId == item.id) return {...item, quantity: item.quantity + 1, total: parseFloat(item.total) + parseFloat(item.price)}
                return {...item}
            }
        )
        setCartItems(orders)
        setCartCount(computeCartCount(orders))
        setSubTotal(computeSubtotal(orders))
        await AsyncStorage.setItem('orders'+userID, JSON.stringify(
            orders
        ))
    }

    const decreaseItem = async (itemId) => {
        const orders =  cartItems.map(
            item => {
                if (itemId === item.id) {
                    if (item.quantity - 1 >= 0) return {...item, quantity: item.quantity - 1, total: parseFloat(item.total) - parseFloat(item.price)}
                }
                return {...item}
            }
        )
        setCartItems(orders)
        setCartCount(computeCartCount(orders))
        setSubTotal(computeSubtotal(orders))
        await AsyncStorage.setItem('orders'+userID, JSON.stringify(
            orders
        ))
    }

    const computeSubtotal = (orders) => {
        return orders.reduce(
            (x, item) => x + (item.quantity * item.price) 
        , 0)
    }

    const contextData = {
        addItem: addItem,
        removeItem: removeItem,
        cartItems: cartItems,
        cartCount: cartCount,
        subTotal: subTotal,
        increaseItem: increaseItem,
        decreaseItem: decreaseItem
    }

    return (
        <CartContext.Provider value={contextData}>
          {!loading && children}
        </CartContext.Provider>
      );
}