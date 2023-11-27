import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-paper'
import BackTitleCartHeader from '../components/general/BackTitleCartHeader';
import Loading from './Loading';
import ProductCard from '../components/products/ProductCard';
import IP from '../ip'

const API_HOST = `http://${IP}/api/products/`

export default function CategorizedProducts({ navigation, route }) {

    const { category } = route.params;
    let [productsLoaded, setProductsLoaded] = useState(false)
    let [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [isEnd, setIsEnd] = useState(false)

    useEffect(
        () => {
            fetchProducts();
        }
        , [category])

    const fetchProducts = async () => {
        setProducts([])
        setPage(2)
        let response = await fetch(API_HOST + `?page=1`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:
            {
                subCategory: category.id
            }
        });
        setProductsLoaded(true)
        var data = await response.json();
        if (response.status === 200) {
            setProducts([...data.results])
            if (data.next == null || data == null) setIsEnd(true)
            else setIsEnd(false)
            setProductsLoaded(false)
        }
    }


    const renderFooter = () => {
        return productsLoaded ? (
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
        return <ProductCard twoCol navigation={navigation} product={item}></ProductCard>
    }

    const fetchProductsOnEndReach = async () => {
        if (!products) {
            let response = await fetch(API_HOST + `?page=${page}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    subCategory: category.id
                }
            });
            setProductsLoaded(true)
            var data = await response.json();
            if (response.status === 200) {
                setProductsLoaded(false)
                if (data.next == null || data == null) setIsEnd(true)
                else setIsEnd(false)
                setPage(page + 1)
                setProducts([...products, ...data.results])
            } else setProductsLoaded(false)
        }
    }

    return (
        <View style={{
            flex: 1
        }}>
            <BackTitleCartHeader cart navigation={navigation} title={category.name}></BackTitleCartHeader>
            <View style={style.products_container}>
                {productsLoaded ? <Loading></Loading> :
                    <FlatList data={products} style={{ flex: 1 }}
                        columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 12 }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        onEndReached={fetchProductsOnEndReach}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={!isEnd && renderFooter}>

                    </FlatList>}
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        products_container: {
            flex: 1,
            padding: 12,
        }
    }
)