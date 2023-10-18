import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function PasswordInput() {
    return (
        <View>
            <TextInput secureTextEntry={true} style={style.password_input} placeholder='Password'></TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    password_input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10
    }
})
