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
import { images, icons } from '../constants/manager'

function ProfileScreen({ navigation }) {
    return (

        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>Profile</Text>
        </View>
    )
}


export default ProfileScreen;