/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Image,
    useColorScheme,
    View,
    Alert,
    ToastAndroid,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';

import NetUtil from './utils/NetUtil';
import LottieView from 'lottie-react-native';
import ValueConst from './utils/ValueConst';
import ButtonGroup from './components/auth/ButtonGroup';
import {InputGroup} from './components/auth/InputGroup';

const App: () => Node = () => {
    const [state, setToggleState] = useState({
        toggle: false,
    });

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        pw: '',
    });

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        backgroundColor: ValueConst.colors.themeColor,
        height: '100%',
    };

    const toggleHandler = () => {
        setToggleState({
            toggle: !state.toggle,
        });
    };

    const emailHandler = text => {
        setLoginInfo({email: text, pw: loginInfo.pw});
    };

    const pwHandler = text => {
        setLoginInfo({email: loginInfo.email, pw: text});
    };

    let group = null;
    if (state.toggle) {
        group = <InputGroup onLoginPress={onLoginPress} emailHandler={emailHandler} pwHandler={pwHandler} />;
    } else {
        group = <ButtonGroup onLoginPress={toggleHandler} onJoinPress={onJoinPress} />;
    }

    async function onJoinPress() {
        await NetUtil.getBoard(136).then(res => {
            Alert.alert(res.data.content);
        });
    }

    async function onLoginPress() {
        await NetUtil.login(loginInfo.email, loginInfo.pw).then(res => {
            if (res.returnCode !== 1) {
                if (Platform.OS === 'android') {
                    ToastAndroid.show(res.returnMessage, ToastAndroid.SHORT);
                } else {
                    Alert.alert(res.returnMessage);
                }
            }
        });
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
                <View style={styles.logoLayout}>
                    <LottieView
                        source={require('../assets/animations/love-explosion.json')}
                        style={styles.lottie}
                        autoPlay
                        loop
                    />
                    <Image style={styles.logo} source={require('../assets/img/title_logo_small.png')} />
                </View>
                {group}
                {/*<ScrollView style={backgroundStyle}>*/}
                {/*    */}
                {/*</ScrollView>*/}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logoLayout: {
        marginTop: 100,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default App;
