import React, { useState } from "react";
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
} from 'react-native';
import UIButton from "../components/uibutton";
import { images, icons } from '../constants/manager'
import Icon from 'react-native-vector-icons/FontAwesome5';

function HomeScreen({ navigation }) {
    return (

        <ImageBackground source={images.background} style={{ flex: 1 }}>
            <StatusBar barStyle={'light-content'} />

            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ height: '10%', backgroundColor: 'purple', flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name={'arrow-left'} size={20} style={{ color: 'white' }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ position: 'absolute', right: 15 }}
                        onPress ={() => navigation.navigate('Intro')}>
                        <Icon name={'tree'} size={20} style={{ color: 'white' }} />
                    </TouchableOpacity>
                </View>

                {/* body */}
                <View style={{ height: '80%', padding: 20 }}>

                    <Text>Đây là Home</Text>
                    <View style={{ flexDirection: 'row', height: '100%', backgroundColor: 'orange', justifyContent: 'space-around' }}>
                        <View style={{ width: '20%', aspectRatio: 1, backgroundColor: 'red' }}>

                        </View>

                        <View style={{ width: '20%', aspectRatio: 1, backgroundColor: 'white' }}>

                        </View>

                        <View style={{ width: '20%', aspectRatio: 1, backgroundColor: 'pink' }}>

                        </View>
                    </View>

                </View>

            </SafeAreaView>

        </ImageBackground>
    )
}


export default HomeScreen;