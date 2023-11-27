import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ProductAddtoCartSuccessModal({ itemName, setOpenModal }) {
    return (
        <View style={{
            height: 140,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFF',
                borderRadius: 20,
                padding: 20,
            }}>
                <Text style={{
                    color: 'black',
                    padding: 12,
                    fontSize: 16,
                    letterSpacing: -1,
                    lineHeight: 20,
                    borderBottomWidth: 1
                }}>{itemName} is added to the Cart!</Text>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }} onPress={() => [
                    setOpenModal(false)
                ]}>
                    <Text style={{
                        color: 'black', 
                        padding: 12
                    }}>Continue Shopping


                    </Text>
                    <AntDesign name='arrowright' size={20} color={'black'} />
                </TouchableOpacity>

            </View>
        </View>
    )
}