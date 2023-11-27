import React, { useContext, useState } from 'react'
import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { Text, Card } from 'react-native-paper'
import { Dimensions } from 'react-native'
import { Button } from 'react-native-paper';
import ProductDetailHeader from '../components/general/ProductDetailHeader';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import BackTitleCartHeader from '../components/general/BackTitleCartHeader';
import CartContext from '../context/product/CartContext';
import ProductAddtoCartSuccessModal from '../components/products/ProductAddtoCartSuccessModal';

const { width, height } = Dimensions.get('window')

export default function ProductDetail({ route, navigation }) {

    const { addItem } = useContext(CartContext);
    const { product } = route.params;
    const [openModal, setOpenModal] = useState(false)

    return (
        navigation && <View style={style.product_detail_container}>
            <View style={{ height: height - 100 }}>
                <BackTitleCartHeader cart navigation={navigation} title='Detail'></BackTitleCartHeader>
                <View style={{
                    opacity: openModal ? 0.2 : 1
                }}>
                    <View>
                        <View style={style.product_detail_main_image_container}>
                            <Image source={{
                                uri: product.image
                            }}
                                style={{
                                    height: 350,
                                    borderRadius: 20
                                }}>

                            </Image>
                            <Text style={style.product_title}>{product.title}</Text>
                            <View style={style.product_detail_subimage}>
                                <View style={{
                                    width: 95,
                                    height: 73,
                                    backgroundColor: '#132635',
                                    justifyContent: 'center',
                                    borderTopStartRadius: 16,
                                    alignItems: 'center'
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 5
                                    }}>
                                        <FontAwesome6 name='star' color='yellow' />
                                        <Text>6.5</Text>
                                    </View>
                                    <Text style={{
                                        fontSize: 8,
                                        color: 'grey',
                                    }}>200 reviews</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={style.product_detail_text_container}>
                        <Text style={{ color: 'black' }}>Description</Text>
                        <Text style={style.product_subtitle}>{product.description}</Text>
                    </ScrollView>
                </View>

            </View>
            <View style={{ 
                 height: 100, 
                 flexDirection: 'row', 
                 justifyContent: 'center', 
                 alignItems: 'center',
                }}>
                <Text variant="titleLarge" style={{ fontSize: 24, color: 'black', width: '30%', textAlign: 'center' }}>$ {product.price}</Text>
                <Button mode='contained-tonal'
                    onPress={() => {
                        addItem(product)
                        setOpenModal(!openModal)
                    }}
                    style={{
                        width: '60%',
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#132635',
                        flexDirection: 'row',
                        gap: 10
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        letterSpacing: -0.5,
                        lineHeight: 30
                    }}>
                        Add to Cart
                    </Text>
                    <FontAwesome6 padding={20} name='cart-shopping' size={20} />
                </Button>
            </View>
            {
                openModal && <ProductAddtoCartSuccessModal itemName={product.title} setOpenModal={setOpenModal}></ProductAddtoCartSuccessModal>
            }
        </View>
    )
}

const style = StyleSheet.create({
    product_detail_container: {
        flex: 1
    },
    product_detail_main_image_container: {
        height: 350,
        marginHorizontal: 16,
        borderRadius: 16,
        position: 'relative'
    },
    product_title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 600,
        letterSpacing: -1,
        fontFamily: 'sans-serif',
        lineHeight: 52,
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    product_detail_text_container: {
        padding: 20,
    },
    product_subtitle: {
        color: 'grey',
        fontSize: 12,
        letterSpacing: -0.3,
        lineHeight: 19.5,
        marginVertical: 8
    },
    product_detail_subimage: {
        backgroundColor: '#fff',
        width: 100,
        height: 78,
        borderTopLeftRadius: 16,
        position: 'absolute',
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})