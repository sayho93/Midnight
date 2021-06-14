/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
    Button,
    Alert,
    TouchableOpacity,
} from 'react-native';

import LottieView from 'lottie-react-native';
import ValueConst from './utils/ValueConst';
import CustomButton from './components/CustomButton';

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        backgroundColor: ValueConst.colors.themeColor,
        height: '100%',
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <View style={styles.logoLayout}>
                <LottieView
                    source={require('../assets/animations/love-explosion.json')}
                    style={styles.lottie}
                    autoPlay
                    loop
                />
                <Image
                    style={styles.logo}
                    source={require('../assets/img/title_logo_small.png')}
                />
            </View>
            <View style={styles.btnLayout}>
                <View style={styles.btnGroup}>
                    <CustomButton
                        title="학교 이메일로 로그인"
                        onPress={() => {
                            Alert.alert('login');
                        }}
                        color={ValueConst.colors.colorPrimaryDark}
                        textColor={ValueConst.colors.white}
                    />
                    <CustomButton
                        title="학교 이메일로 회원가입"
                        onPress={() => {
                            Alert.alert('join');
                        }}
                        color={ValueConst.colors.white}
                        textColor={ValueConst.colors.colorPrimaryDark}
                    />
                    <Image
                        style={styles.bottomLogo}
                        source={require('../assets/img/text_logo_gray_small.png')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logoLayout: {
        marginTop: 100,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    lottie: {
        width: 180,
        height: 180,
        marginBottom: 20,
    },
    logo: {
        resizeMode: 'cover',
        width: 150,
        height: 45,
    },
    btnLayout: {
        margin: 20,
        alignItems: 'center',
        // backgroundColor: 'black',
    },
    btnGroup: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
        // backgroundColor: ValueConst.colors.colorPrimaryDark,
    },
    bottomLogo: {
        marginTop: 40,
        marginBottom: 10,
        width: 60,
        height: 13,
    },
});

export default App;
