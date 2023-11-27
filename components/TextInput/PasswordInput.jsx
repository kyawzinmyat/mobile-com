import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function PasswordInput({onChangePassword}) {
        
    return (
        <View>
            <TextInput onChangeText={newText => onChangePassword(newText)} placeholderTextColor='black' secureTextEntry={true} style={style.password_input} placeholder='Password'></TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    password_input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginVertical: 40,
        padding: 10,
        color: 'black'
    }
})
