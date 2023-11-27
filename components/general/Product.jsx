import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import AuthContext from '../../context/authcontext/AuthContext';
import ProductCard from '../products/ProductCard';
import ProductContext from '../../context/product/ProductContext';
import Loading from '../../screens/Loading';
import IP from '../../ip'

const API_HOST = `http://${IP}/api/products/`
// const API_HOST = "http://192.168.100.38:8000/api/products/";
// const API_HOST = 'http://10.0.2.2:8000/api/products/main-categories'

export default function Product({ navigation }) {
    const { getAccessToken } = useContext(AuthContext);
    const { currentCategory } = useContext(ProductContext);
    const [cuCat, setCuCat] = useState(currentCategory)
    let [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [isEnd, setIsEnd] = useState(false)

    useEffect(
        () => {
            fetchProducts();
        }
        , [cuCat, currentCategory])

    const fetchProducts = async () => {
        setProducts([])
        setPage(2)
        let response = await fetch(API_HOST + `?page=1`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: currentCategory.id
            })
        });
        setLoading(true)
        var data = await response.json();
        if (response.status === 200) {
            setProducts([...data.results])
            if (data.next == null || data == null) setIsEnd(true)
            else setIsEnd(false)
            setLoading(false)
        }
    }

    const fetchProductsOnEndReach = async () => {
        console.log(1)
        let response = await fetch(API_HOST + `?page=${page}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: currentCategory.id
            })
        });
        setLoading(true)
        var data = await response.json();
        if (response.status === 200) {
            setLoading(false)
            if (data.next == null || data == null) setIsEnd(true)
            else setIsEnd(false)
            setPage(page + 1)
            setProducts([...products, ...data.results])
        } else setLoading(false)
 
    }
    const renderFooter = () => {
        return loading ? (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>
                <ActivityIndicator style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }} size={60} color='black'>
                </ActivityIndicator>
            </View>
        ) : null;
    }

    const renderItem = ({ item }) => {
        return <ProductCard navigation={navigation} product={item}></ProductCard>
    }

    return (
        <View style={style.products_container}>
        
                <FlatList data={products} style={{ flex: 1 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    onEndReached={fetchProductsOnEndReach}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={!isEnd && renderFooter}>

                </FlatList>
        </View>
    )
}


const style = StyleSheet.create(
    {
        products_container: {
            flex: 1,
            padding: 20,
            height: 370
        }
    }
)
