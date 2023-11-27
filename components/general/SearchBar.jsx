import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ShoppingCart from '../ShoppingCart';

export default function SearchBar({navigation}) {
    return (
        <View style={style.searchbar_container}>
            <View style={style.searchbar_subcontainer}>
                <FontAwesome6 paddingRight={15} paddingLeft={10} name={'magnifying-glass'} size={16} color={'black'} />
                <TextInput placeholderTextColor={'black'} style={style.searchbar_textinput} placeholder='Search...'></TextInput>
            </View>
            <ShoppingCart navigation={navigation}></ShoppingCart>
        </View>
    )
}

const style = StyleSheet.create(
    {
        searchbar_container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            borderRadius: 10
        },
        searchbar_subcontainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F7F7F7',
            borderRadius: 16,
        },
        searchbar_textinput: {
            flex: 4/5,
        },
    }
)
