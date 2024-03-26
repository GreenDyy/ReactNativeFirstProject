import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { icons } from '../constants/manager';

const Circle = ({ backgroundColor, size = 25 }) => {
    return (
        <View style={{ backgroundColor: backgroundColor, width: size, aspectRatio: 1, borderRadius: 999 }} />
    )
}

const sizeShoes = [
    { size: 13 },
    { size: 14 },
    { size: 15 },
    { size: 16 },
    { size: 17 },
];

function DetailsScreen({ route, navigation }) {
    const { name, price, brand, image, desc } = route.params;

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                    <Image source={icons.back} resizeMode='contain' style={{ height: 25, width: 25 }} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={icons.more} resizeMod='contain' style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Image */}
                <View style={{ paddingHorizontal: 20, marginHorizontal: 10, borderRadius: 20, backgroundColor: '#CCCCCC', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={brand} style={{
                        tintColor: 'black', height: 300, width: 300, position: 'absolute'
                    }} resizeMode="contain" />
                    <Image source={image} style={{ height: 400, width: 300 }} resizeMode="contain" />
                </View>

                {/* Nữa thân dưới */}
                <View style={{ margin: 20 }}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>${price}</Text>
                    <Text style={styles.desc}>{desc}</Text>

                    {/* Thanh chọn màu và nút chọn size */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: '40%', justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Circle backgroundColor={'lightgreen'} />
                            <Circle backgroundColor={'lightblue'} />
                            <Circle backgroundColor={'pink'} />
                            <Circle backgroundColor={'orange'} />
                        </View>

                        <SelectDropdown
                            style={{ backgroundColor: 'green' }}
                            data={sizeShoes}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={{ flexDirection:'row', backgroundColor: '#CCCCCC', width: '40%', borderRadius: 10, justifyContent: 'space-around', alignItems:'center' , padding: 12}}>
                                        <Text style={{ textAlign: 'center', fontSize: 15 }}>
                                            {(selectedItem && selectedItem.size) || 'Chọn size giày'}
                                        </Text>
                                        <Image source={icons.down} resizeMode='stretch' style={{height: 15, width: 20, marginLeft: 10}}/>
                                    </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{backgroundColor:'gray', marginBottom: 5, borderRadius: 10}}>
                                        <Text style={{fontSize: 15, padding: 7 }}>{item.size}</Text>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}
                        />
                    </View>

                    <TouchableOpacity style={{ backgroundColor: 'black', justifyContent: 'center', borderRadius: 20, paddingVertical: 15, marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Add to bag</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    price: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    desc: {
        fontSize: 16,
        marginBottom: 10,
    }
});

export default DetailsScreen;
