import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function UsernameInput() {
  return (
    <View>
        <TextInput  style={style.username_input} placeholder='Username'></TextInput>
    </View>
  )
}

const style = StyleSheet.create({
    username_input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10
    },
})
