import React, { useState } from "react"
import {
    Text,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    View,
    SafeAreaView,
    StatusBar,
    Touchable,
    StyleSheet,
    FlatList,
} from 'react-native'
import { images, icons } from '../constants/manager'
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Nike Air Max 90',
        price: 239.80,
        image: icons.adidas,
        brand: icons.adidas,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Nike Air Max 80',
        price: 239.80,
        image: icons.adidas,
        brand: icons.adidas,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Jordan Air',
        price: 239.80,
        image: icons.adidas,
        brand: icons.adidas,
    },
];

const Item = ({ price, name, image, brand }) => (
    <View style={{ padding: 10, margin: 20, width: '30%', height: 100 }}>
        <View style={{backgroundColor: '#CCCCCC', borderRadius: 20}}>
            <Image source={image} resizeMode="stretch" />
            <Image source={brand} resizeMode="stretch" style={{position: "relative", right:5, bottom: 5}} />
        </View>

        <Text style={{}}>{price}</Text>
        <Text style={{}}>{name}</Text>
    </View>
);

function HomeScreen({ navigation }) {
    // const { name } = route.params
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <StatusBar barStyle={'light-content'} />

            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ height: '10%', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                        Sneakrs
                    </Text>

                    <TouchableOpacity style={{ position: 'absolute', right: 15 }}
                        onPress={() => navigation.navigate('MyTabs')}>
                        <Image source={icons.notification} resizeMode="stretch" style={{ tintColor: 'gray' }} />

                    </TouchableOpacity>

                </View>

                {/* SearchBar */}
                <TouchableOpacity style={{ height: '8%', alignItems: 'center', flexDirection: 'row', borderRadius: 20, backgroundColor: '#CCCCCC' }}>
                    <Image source={icons.heart} style={{ marginLeft: 8 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 8 }}>Search</Text>
                </TouchableOpacity>

                {/* Top Brand */}
                <View style={{ height: '20%', marginVertical: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Top Brands</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                        <TouchableOpacity style={styles.brand}>
                            <Image source={icons.nike} style={{ tintColor: 'black' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.brand}>
                            <Image source={icons.adidas} style={{ tintColor: 'black' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.brand}>
                            <Image source={icons.puma} style={{ tintColor: 'black' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.brand}>
                            <Image source={icons.jordan} style={{ tintColor: 'black' }} />
                        </TouchableOpacity>
                    </View>

                </View>

                {/* Polular */}
                <View style={{ height: '80%' }}>
                    <FlatList
                        numColumns={2}
                        data={DATA}
                        renderItem={({ item }) => <Item name={item.name} price={item.price} image={item.image} brand={item.brand} />}
                        keyExtractor={item => item.id}
                    />
                </View>

            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    brand: {
        width: '20%', aspectRatio: 1, backgroundColor: '#CCCCCC', borderRadius: 20, justifyContent: 'center', alignItems: 'center'
    }
})

export default HomeScreen;