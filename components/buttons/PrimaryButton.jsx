import React, { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default function PrimaryButton(props) {

    const style = StyleSheet.create(
        {
            login_button: {
                justifyContent: 'center',
                flexDirection: 'row',
                margin: props.margin || 20,
                height: props.height || 40,
                width: props.width || 100,
                backgroundColor: props.bg || 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            login_button_text: {
                fontSize: 15,
                fontWeight: '500',
                color: 'black',
            },
        }
    )

    return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={style.login_button}  onPress={props.onPress}>
                {props.children}
            </TouchableOpacity>
        </View>
    )
}
