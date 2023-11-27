import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import AuthContext from '../../context/authcontext/AuthContext';
import SubCategoryCard from './SubCategoryCard';
import IP from '../../ip'

const API_HOST = `http://${IP}/api/products/categories`
// const API_HOST = "http://192.168.100.38:8000/api/products/categories";
// const API_HOST = 'http://10.0.2.2:8000/api/products/main-categories'

export default function SubCategory({navigation}) {

    const { getAccessToken } = useContext(AuthContext)
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            const fetchCategory = async () => {
                let response = await fetch(API_HOST, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + String(await getAccessToken()),
                    },
                });
                setLoading(true)
                var data = await response.json();
                if (response.status === 200) {
                    setCategories(data)
                    if (data != undefined) setLoading(false)
                    return;
                }
            }
            fetchCategory();
        }, [])

    return (

        !loading && <View style={{ backgroundColor: 'white' }}>
            <View style={{
                paddingHorizontal: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    lineHeight: 36.5,
                    letterSpacing: -1.5,
                    fontWeight: 600,
                    color: 'black'
                }}>Not sure where to Start!</Text>
                <View style={{
                    paddingVertical: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 20
                }}>
                    {categories.map(
                        category => {
                            return <SubCategoryCard category={category} navigation={navigation} key={category.id}></SubCategoryCard>
                        }
                    )}
                </View>
            </View>
        </View>

    )
}
