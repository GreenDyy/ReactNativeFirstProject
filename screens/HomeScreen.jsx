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
} from 'react-native';
import UIButton from "../components/uibutton";
import { images, icons } from '../constants/manager'
import Icon from 'react-native-vector-icons/FontAwesome5';

function LoginScreen() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (

        <ImageBackground source={images.background} style={{ flex: 1 }}>
            <StatusBar barStyle={'light-content'} />

        </ImageBackground>
    )
}


export default LoginScreen;