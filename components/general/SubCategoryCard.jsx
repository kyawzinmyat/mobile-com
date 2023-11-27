import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card } from 'react-native-paper';

export default function SubCategoryCard({ category, navigation }) {

    const handleProductPress = () => {
        navigation.navigate('CategorizedProducts', {
            category: category
        })
    }

    return (

        category && <View style={style.subcategory_card_container}>
            <Card>
                <TouchableOpacity onPress={handleProductPress}>
                    <Card.Cover style={{
                    }} source={{ uri: category.image }} />
                    <View style={style.product_information_container}>
                        <Text style={{
                            fontSize: 16,
                            padding: 8,
                            color: 'white',
                            fontWeight: 900
                        }}>{category.name}</Text>
                    </View>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

const style = StyleSheet.create(
    {
        subcategory_card_container: {
            width: '47%',
            borderRadius: 16,
            borderWidth: 3,
            borderColor: '#F7F7F7',
            backgroundColor: '#F7F7F7',
            position: 'relative'
        },
        product_information_container: {
            position: 'absolute',
            top: 0
        }
    }
)
