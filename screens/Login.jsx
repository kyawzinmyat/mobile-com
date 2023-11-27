import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import UsernameInput from '../components/TextInput/UsernameInput'
import PasswordInput from '../components/TextInput/PasswordInput'
import PrimaryButton from '../components/buttons/PrimaryButton'
import AuthContext from '../context/authcontext/AuthContext'

export default function Login({ navigation }) {

    let { login } = useContext(AuthContext);

    let [passowrd, setPassword] = useState('');
    let [username, setUsername] = useState('');
    let [usernameError, setUsernameError] = useState('')
    let [passwordError, setPasswordError] = useState('')

    const handleOnClickLogin = () => {
        if (username === '') setUsernameError('Username Cannot Be Empty')
        if (passowrd === '') setPasswordError('Password Cannot Be Empty')
        const status = login(username, passowrd)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={style.mainContainer}>
                <View style={style.main_container}>
                    <View style={style.main_login_container}>
                        <View style={style.login_title}>
                            <View style={style.title_container}>
                                <Text style={style.title_first}>Experience2</Text>
                                <Text style={style.title_second}>Luxury Again</Text>
                            </View>
                        </View>
                        <Text style={style.login_your_account}>Login your account</Text>

                        <View style={style.login_input_container}>
                            <ScrollView style={style.login_input_subcontainer}>
                                <Text style={style.error_message}>{usernameError && usernameError}</Text>
                                <UsernameInput onChangeUsername={setUsername}></UsernameInput>
                                <Text style={style.error_message}>{passwordError && passwordError}</Text>
                                <PasswordInput onChangePassword={setPassword}></PasswordInput>
                                <PrimaryButton onPress={handleOnClickLogin}>
                                    <Text style={style.login_button_text}>Login</Text>
                                </PrimaryButton>
                                <Text style={style.already_have_account_text}>Already have an account? Signup</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        mainContainer: {
            padding: 20,
            flex: 1,
        },
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
            fontSize: 42,
            fontWeight: '700',
            color: 'black',
            fontFamily: 'sen sirif',
            letterSpacing: -0.5,
            lineHeight: 40,

        },
        title_second: {
            fontSize: 40,
            fontWeight: '700',
            color: 'black',
            fontFamily: 'sen sirif',
            lineHeight: 39,
            letterSpacing: -0.8,
        },
        login_input_subcontainer: {
            flex: 1,
            paddingTop: 50,
        },
        already_have_account_text: {
            fontSize: 12,
            color: 'black',
            textAlign: 'center',
            fontWeight: '500',
            opacity: 0.5,
        },
        login_your_account: {
            fontSize: 12,
            fontWeight: '100',
            color: 'black',
            fontFamily: 'sen sirif',
            lineHeight: 19,
            opacity: 0.8,
            letterSpacing: -0.8,
            padding: 3
        },
        login_button_text: {
            fontSize: 16,
            fontWeight: '800',
            color: 'black'
        },
        error_message: {
            color: 'red',
            fontSize: 16,
            letterSpacing: -1,
            lineHeight: 23
        }
    }
)
