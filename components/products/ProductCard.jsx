import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import { Card } from 'react-native-paper';

export default function ProductCard({ product, navigation, twoCol, footer }) {

    const style = StyleSheet.create(
        {
            product_card_container: {
                height: twoCol ? '100%' : 320,
                width: twoCol ? '48%' : 250,
                padding: twoCol ? 4: 20,
                marginRight: 12,
                borderRadius: 16,
                backgroundColor: '#F7F7F7'
            },
            heart_icon: {
                position: 'absolute',
                top: 10,
                right: 10,
    
            },
            product_card_title: {
                color: 'black'
            },
            product_title: {
                color: 'black',
                fontSize: 20,
                fontWeight: '600',
                padding: 8
            },
            product_category: {
                paddingHorizontal: 8,
                color: 'grey'
            },
            product_information_container: {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            product_price: {
                color: '#27284E',
                fontSize: 16,
                fontWeight: '800',
                paddingHorizontal: 8,
            },
            circle_plus: {
                paddingHorizontal: 20,
            }
        }
    )
    

    let [fav, setFav] = useState(false)

    const handleProductPress = () => {
        navigation.navigate('ProductDetail', {
            product: product
        })
    }

    return (

        <View style={style.product_card_container}>
            <Card>
                <TouchableOpacity onPress={handleProductPress}>
                    <Card.Cover style={{
                        width: '100%'
                    }} source={{ uri: product.image }} />
                </TouchableOpacity>

                <TouchableOpacity style={style.heart_icon} onPress={
                    () => setFav(!fav)
                }>
                    <Octicons name='heart-fill' color={!fav ? '#122634': 'red'}  size={20} />
                </TouchableOpacity>
            </Card>
            <Text style={style.product_title}>
                {product.title}
            </Text>
            {
                footer && <View style={style.product_information_container}>
                <Text style={style.product_category}>{product.category_name}</Text>
                <Text style={style.product_price}>$ {product.price}</Text>
            </View>
            }
        </View>
    )
}