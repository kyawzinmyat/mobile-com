import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Text } from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FA6 from 'react-native-vector-icons/FontAwesome6'
import CartContext from '../../context/product/CartContext'
import ProductCartCardDetailAccordian from './ProductCartCardDetailAccordian'
import ProductCartCardEdit from './ProductCartCardEdit'

export default function ProductCartCard({ item, navigation }) {

    const { removeItem } = useContext(CartContext)
    const [openDetail, setOpenDetail] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    return (
        <TouchableOpacity style={{
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            marginVertical: 10
        }} onPress={
            () => {
                navigation.navigate('ProductDetail', {
                    product: item
                })
            }
        }>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20
            }}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        gap: 10
                    }}>
                        <Image style={{ height: 100, width: 100, borderRadius: 12 }} src={item.image}></Image>
                        <View style={{
                            justifyContent: 'space-between',
                        }}>
                            <View>
                                <Text style={style.title}>{item.title}</Text>
                                <Text style={style.qty}>Qty x {item.quantity}</Text>
                                
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                gap: 10
                            }}>
                                <TouchableOpacity style={{
                                    width: 40,
                                    alignItems: 'center',
                                    padding: 4,
                                    borderRadius: 8,
                                    backgroundColor: '#F4F4F4',
                                }} onPress={() => {
                                    removeItem(item)
                                }}>
                                    <AntDesign name='delete' size={20} color={'red'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    width: 40,
                                    alignItems: 'center',
                                    padding: 4,
                                    borderRadius: 8,
                                    backgroundColor: '#F4F4F4',
                                }} onPress={() => {
                                    setIsEdit(!isEdit)
                                }}>
                                    <FA6 name='pencil' size={20} color={'black'} />
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity style={{
                        position: 'relative'
                    }} onPress={() => setOpenDetail(!openDetail)}>
                        <Entypo color='grey' size={20} name='dots-three-vertical' />
                        <ProductCartCardDetailAccordian></ProductCartCardDetailAccordian>
                    </TouchableOpacity>
                    
                    <Text style={style.price}>$ {item.total}</Text>
                </View>
                
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            {
                isEdit && <ProductCartCardEdit itemId={item.id}/>
            }
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create(
    {
        title: {
            color: 'black',
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: -1,
            lineHeight: 30,
        },
        qty: {
            color: 'black',
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: -1,
            lineHeight: 30,
            color: 'grey',
            marginTop: -10
        },
        price: {
            color: 'black',
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: -1,
            lineHeight: 30,
        }
    }
)