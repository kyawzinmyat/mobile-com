import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProductCartCardDetailAccordian() {
    return (
        <View style={style.accoridan}>
            <View style={
                {
                    backgroundColor: '#FFF',
                }
            }>
                <Text style={{
                    color: 'white'
                }}>ProductCartCardDetailAccordian</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        accoridan: {
            position: 'absolute',
            top: 29,
            width: 150,
            right: 0,
            top: 30,
            backgroundColor: '#FFF',
        }
    }
)