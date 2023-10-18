import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UsernameInput from '../components/TextInput/UsernameInput'
import PasswordInput from '../components/TextInput/PasswordInput'
import PrimaryButton from '../components/buttons/PrimaryButton'

export default function Login() {
    return (
        <View style={style.main_container}>
            {/* <Text>Login</Text> */}
            <View style={style.main_login_container}>
                <View style={style.login_title}>
                    <View style={style.title_container}>
                        <Text style={style.title_first}>Experience</Text>
                        <Text style={style.title_second}>Luxury Again</Text>
                        <Text style={{paddingVertical: 10}}>Login your account</Text>
                    </View>
                </View>
                <View style={style.login_input_container}>
                    <View style={style.login_input_subcontainer}>
                        <UsernameInput></UsernameInput>
                        <PasswordInput></PasswordInput>
                        <PrimaryButton></PrimaryButton>
                        <Text style={style.already_have_account_text}>Already have an account? Signup</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        main_container: {
            flex: 1,
        },
        main_login_container: {
            flex: 3,
        },
        login_title: {
            flex: 1,
        },
        login_input_container: {
            flex: 2,
        },
        title_container: {
            flex: 1,
            justifyContent: 'flex-end'
        },
        title_first: {
            fontSize: 32,
            fontWeight: '700',
            color: 'black',
            fontFamily: 'sen sirif'
        },
        title_second: {
            fontSize: 30,
            fontWeight: '700',
            color: 'black',
            fontFamily: 'sen sirif'
        },
        login_input_subcontainer: {
            flex: 1,
            paddingTop: 50
        },
        already_have_account_text: {
            fontSize: 12,
            color: 'black',
            textAlign: 'center'
        }
    }
)
