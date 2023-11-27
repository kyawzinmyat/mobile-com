import { ScrollView, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Button, Text } from 'react-native-paper'
import BackTitleCartHeader from '../components/general/BackTitleCartHeader'
import CartContext from '../context/product/CartContext'
import ProductCartCard from '../components/products/ProductCartCard'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

export default function ShoppingCart() {

    const {subTotal} = useContext(CartContext);
    const {cartCount} = useContext(CartContext);
    const navigation = useNavigation();
    const { cartItems } = useContext(CartContext);

    return (
        <View style={{
            backgroundColor: '#F6F6F6',

        }}>
            <View style={{
                height: height - 220,
            }}>
                <BackTitleCartHeader navigtion={navigation} title={'Your Cart'}></BackTitleCartHeader>
                <ScrollView >
                    <View>
                        <View style={
                            {
                                paddingHorizontal: 20
                            }
                        }>
                            {
                                cartItems.map(
                                    item => {
                                        if (item.quantity != 0) return <ProductCartCard navigation={navigation} key={item.id} item={item}></ProductCartCard>
                                    }
                                )
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={{
                height: 220,
                backgroundColor: '#FFFFFF'
            }}>
                <View style={style.cartInformation}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={style.netTotal}>Net Total</Text>
                        <Text style={style.number}>$ {subTotal}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={style.discount}>Discount</Text>
                        <Text style={style.number}>$0</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={style.total}>Total</Text>
                        <Text style={style.number}>$ {subTotal}</Text>
                    </View>
                </View>
                <TouchableOpacity style={style.checkoutButton}>
                    <Text style={style.checkout}>
                        CHECKOUT ({cartCount}) ITEMS
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        checkout: {
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: -1,
            lineHeight: 36,
            color: '#FFFFFF',
        },
        checkoutButton: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#040D12',
            margin: 16,
            padding: 12,
            borderRadius: 28
        },
        cartInformation: {
            paddingVertical: 20,
            paddingHorizontal: 28,
            flex: 1,
        },
        netTotal: {
            fontSize: 20,
            color: 'grey',
            fontWeight: '600',
            letterSpacing: -1,
            lineHeight: 24
        },
        tax: {
            fontSize: 20,
            marginTop: 5,
            color: 'grey',
            fontWeight: '600',
            letterSpacing: -1,
            lineHeight: 24
        },
        discount: {
            fontSize: 20,
            color: 'grey',
            marginTop: 5,
            fontWeight: '600',
            letterSpacing: -1,
            lineHeight: 24
        },
        total: {
            fontSize: 20,
            color: 'grey',
            marginTop: 5,
            fontWeight: '600',
            letterSpacing: -1,
            lineHeight: 24
        },
        number: {
            fontSize: 20,
            color: 'black'
        }
    }
)