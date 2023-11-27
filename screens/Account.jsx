import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import AuthContext from '../context/authcontext/AuthContext'

export default function Account() {

    const { logout } = useContext(AuthContext)

    return (
        <View>
            <Text>Account</Text>
            <TouchableOpacity onPress={logout}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}