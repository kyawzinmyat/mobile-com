import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function PrimaryButton() {



    return (
        <TouchableOpacity style={style.login_button}>
            <Text style={style.login_button_text}>Login</Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create(
    {
        login_button: {
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            margin: 50
        },
        login_button_text: {
            fontSize: 15,
            color: 'black'
        },
    }
)
