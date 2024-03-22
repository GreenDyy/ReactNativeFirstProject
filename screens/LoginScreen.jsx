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

            <SafeAreaView style={{ flex: 1 }}>
                {/* top */}
                <View style={{ height: '40%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 42, fontWeight: 'bold', color: 'white' }}>
                        Coffee
                    </Text>
                    <Image source={icons.logoTo} resizeMode="contain" style={{ width: '50%', height: '50%' }} />
                </View>

                {/* mid */}
                <View style={{
                    backgroundColor: 'white',
                    padding: 20,

                    borderRadius: 10,
                    marginHorizontal: 20
                }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={'cat'} size={15} style={{ color: 'green' }} />
                        <Text style={{ fontWeight: 'bold', color: 'green', marginLeft: 5 }}>Tên đăng nhập</Text>
                    </View>

                    <TextInput style={{ borderBottomWidth: 1, paddingVertical: 0 }} autoCapitalize="none" />

                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={'lock'} size={15} style={{ color: 'green' }} />
                            <Text style={{ fontWeight: 'bold', color: 'green', marginLeft: 5 }}>Mật khẩu</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput style={{ borderBottomWidth: 1, paddingVertical: 0, width: '100%' }}
                                autoCapitalize="none"
                                secureTextEntry={passwordVisible} />
                            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={15} style={{ position: 'absolute', right: 0, marginTop: -5 }} />
                            </TouchableOpacity>

                        </View>

                    </View>

                    {/* Button*/}
                    <View style={{ marginTop: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => alert('Hi')} style={{ borderRadius: 10, borderWidth: 1, borderColor: 'green', width: '60%', paddingVertical: 5 }}>
                            <Text style={{ textAlign: 'center', color: 'green', fontWeight: 'bold', fontSize: 18 }}>Đăng nhập</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 10}}>
                            <Text>Chưa có tài khoản?</Text>
                            <TouchableOpacity onPress={() => alert('Hi')}>
                                <Text style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}> Đăng ký</Text>
                            </TouchableOpacity>
                        </View>




                    </View>


                </View>
                {/* bottom */}
                <View style={{}}>

                </View>

            </SafeAreaView>

        </ImageBackground>
    )
}


export default LoginScreen;