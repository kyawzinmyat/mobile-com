import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function UsernameInput({onChangeUsername}) {

  return (
    <View>
        <TextInput onChangeText={newText => onChangeUsername(newText)} placeholderTextColor='black' style={style.username_input} placeholder='Username'></TextInput>
    </View>
  )
}

const style = StyleSheet.create({
    username_input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        color: 'black',
        marginVertical: 0,
        paddingHorizontal: 10,
    },
})
