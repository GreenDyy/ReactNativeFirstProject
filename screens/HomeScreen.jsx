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
import { icons } from '../constants/manager'
import DATASHOE from '../datas/datashoe'


const ItemColumn1 = ({ price, name, image, brand, onPress }) => (
    <TouchableOpacity style={{ marginTop: 10 }} onPress={onPress}>
        <View style={{ backgroundColor: '#CCCCCC', borderRadius: 20, height: 150, width: 140, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={image} resizeMode="stretch" />
            <Image source={brand} resizeMode="stretch" style={{ position: 'absolute', right: 10, bottom: 15, tintColor: 'gray' }} />
        </View>

        <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>${price}</Text>
            <Text style={{}}>{name}</Text>
        </View>
    </TouchableOpacity>
);

const ItemColumn2 = ({ price, name, image, brand, onPress }) => (
    <TouchableOpacity style={{ marginTop: 30, right: 0, position: 'absolute' }} onPress={onPress}>
        <View style={{ backgroundColor: '#CCCCCC', borderRadius: 20, height: 150, width: 140, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={image} resizeMode="stretch" />
            <Image source={brand} resizeMode="stretch" style={{ position: 'absolute', right: 10, bottom: 15, tintColor: 'gray' }} />
        </View>
        <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>${price}</Text>
            <Text style={{}}>{name}</Text>
        </View>
    </TouchableOpacity>
);

function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState('')

    return (
        <View style={{ flex: 1, paddingHorizontal: 30}}>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                        Sneakers
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Notification')}>
                        <Image source={icons.notification} resizeMode="stretch" style={{ tintColor: 'gray' }} />

                    </TouchableOpacity>

                </View>

                {/* SearchBar */}
                <View style={{ alignItems: 'center', flexDirection: 'row', borderRadius: 20, backgroundColor: '#CCCCCC' }}>
                    <Image source={icons.search} style={{ marginLeft: 8 }} />
                    <TextInput
                        style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 8 }}
                        placeholder="Search"
                        onChangeText={setSearchText}
                        value={searchText}
                    />
                </View>

                {/* Top Brand */}
                <View style={{ marginVertical: 20 }}>
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
                <View style={{}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Polular</Text>
                    <FlatList
                    contentContainerStyle={{ paddingBottom: 300 }} 
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={DATASHOE}
                        renderItem={({ item, index }) => (
                            index % 2 === 0 ?
                                <ItemColumn1 name={item.name} price={item.price} image={item.image} brand={item.brand}
                                    onPress={() => {
                                        navigation.navigate('Details', { id: item.id, name: item.name, price: item.price, brand: item.brand, image: item.image, desc: item.desc })
                                    }}
                                /> :
                                <ItemColumn2 name={item.name} price={item.price} image={item.image} brand={item.brand}
                                    onPress={() => {
                                        navigation.navigate('Details', { id: item.id, name: item.name, price: item.price, brand: item.brand, image: item.image, desc: item.desc })
                                    }}
                                />
                        )}
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