import React from "react";
import {
    View,
    Text,
    Button,
    Image,
    ImageBackground,
    StyleSheet,
} from 'react-native';

//import ảnh
import { images, icons } from '../constants/manager'
import UIButton from "../components/uibutton";


function IntroScreen({navigation}) {
    return (
        <ImageBackground
            source={images.background}
            resizeMode="stretch"
            style={{ flex: 1 }}>
            <View style={styles.container}>

                <View style={{
                    flexDirection: "row",
                    flex: 0.1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>

                    <Image source={icons.logo} style={styles.logo} />
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        marginLeft: 6,
                        color: 'white',
                    }}>Cat & Trip</Text>
                </View>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 0.8,
                    }}>
                    <Image source={images.cat} style={styles.logoTo} />
                    <Text style={[styles.title, styles.customFont]}>Wellcome To Cat Coffee!</Text>
                    <Text style={styles.desc}>
                        Với mỗi phút giây mà bạn dành để thưởng thức cafe, đó chính là một khoảnh khắc đẹp nhất
                    </Text>

                    <UIButton event={() => navigation.navigate('Login')} title='Get Started!'></UIButton>

                </View>

            </View>
        </ImageBackground>
    );
}
//định nghĩa style
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 32,
        paddingHorizontal: 24,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    logo: {
        width: 40,
        height: 40,
        marginLeft: 10
    },
    customFont: {
        fontFamily: 'Arial',
        fontSize: 20,
    },
    logoTo: {
        height: 200,
        width: 200,
        borderRadius: 300,
        borderWidth: 2,
        borderColor: 'white',
    },
    desc: {
        textAlign: 'center',
        color: 'white',
        marginHorizontal: 30,
        marginTop: 10,
    }
});

export default IntroScreen;