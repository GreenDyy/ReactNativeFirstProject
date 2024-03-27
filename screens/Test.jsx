import React, { useState, useEffect } from "react";
import {
    Text,
    Image,
    View,
    Dimensions,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { images } from '../constants/manager';

const Circle = ({ backgroundColor, size = 25 }) => {
    return (
        <View style={{ backgroundColor: backgroundColor, width: size, aspectRatio: 1, borderRadius: 999 }} />
    )
}

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const listImages = [
    images.cat,
    images.cat2, images.cat2, images.cat2, images.cat2, images.cat2,
];

function Test({ navigation }) {

    useEffect(() => {
        //load data
        setImageList(listImages);
    }, []);

    const [imageActive, setImageActive] = useState(0);
    const [imageList, setImageList] = useState([]);

    return (
        <View style={{ flex: 1 }}>

            <View style={{ width: WIDTH, height: HEIGHT * 0.25 }}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    contentContainerStyle={{ width: WIDTH * imageList.length, height: HEIGHT * 0.25 }}
                    onScroll={e => {
                        const slide = Math.ceil(e.nativeEvent.contentOffset.x / WIDTH)
                        setImageActive(slide)
                    }}
                >
                    {imageList.map((image, index) => (
                        <Image
                            key={index}
                            source={image}
                            resizeMode="cover"
                            style={{ width: WIDTH, height: HEIGHT * 0.25 }}
                        />
                    ))}
                </ScrollView>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        color: 'green',
        margin: 3,
    },
    dotActive: {
        color: 'black',
        margin: 3,
    },
});

export default Test;
