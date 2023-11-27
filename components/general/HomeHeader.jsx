import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Category from './Category';
import { Dimensions } from "react-native";
import SearchBar from './SearchBar';
import Product from './Product';
const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;

export default function HomeHeader({navigation}) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={style.header_container}>
                <View style={style.main_container}>
                    <View>
                        <View>
                            <Text style={style.main_title}>Discover</Text>
                            <Text style={style.sub_title}>Find anything what you want!</Text>
                        </View>
                    </View>
                    <View style={style.icons_container}>
                        {/* <FontAwesome6 name={'magnifying-glass'} size={20}/> */}
                        <FontAwesome6 name={'bell'} size={25} backgroundColor={'white'} color={'black'} style={{borderRadius: 30, padding: 5}}/>
                    </View>
                </View>
                <SearchBar navigation={navigation}></SearchBar>
            </View>
            <Category></Category>
            <Product navigation={navigation}></Product>
        </View>
    )
}

const style = StyleSheet.create(
    {
        main_container: {
            flexDirection: 'row',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 16
        },
        main_title: {
            color: '#122634',
            fontWeight: '500',
            fontSize: 32,
            lineHeight: 36,
            letterSpacing: -1
        },
        sub_title: {
            color: 'grey',
            fontSize: 13,
            lineHeight: 15.6
        },
        icons_container: {
            flexDirection: 'row',
            position: 'absolute',
            right: 0,
            paddingHorizontal: 10,
        },
        header_container: {
            // borderBottomStartRadius: 30,
            height: 200,
            borderBottomEndRadius: 40,
            padding: 20,
            flex: 1,
        }
    }
)
