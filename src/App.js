/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Image, useColorScheme, View, TextInput, Animated} from 'react-native';

import LottieView from 'lottie-react-native';
import ValueConst from './utils/ValueConst';
import CustomButton from './components/CustomButton';
import NetUtil from './utils/NetUtil';

import {useSpring, animated} from 'react-spring';

const AnimatedView = animated(View);

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
        await NetUtil.getBoard(136);
    }

    async function onLoginPress() {
        console.log(loginInfo);
        const user = await NetUtil.login(loginInfo.email, loginInfo.pw);
        if (user) {
            console.log(user);
        }
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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
        </SafeAreaView>
    );
};

const InputGroup = props => {
    const animation = useSpring({
        to: {opacity: 1},
        from: {opacity: 0},
        delay: 100,
    });

    return (
        <AnimatedView style={animation}>
            <View style={styles.groupLayout}>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => props.emailHandler(text)}
                        placeholder="이메일"
                        placeholderTextColor={ValueConst.colors.thisgray}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => props.pwHandler(text)}
                        textContentType="password"
                        placeholder="패스워드"
                        returnKeyType="go"
                        secureTextEntry={true}
                        autoCorrect={false}
                        placeholderTextColor={ValueConst.colors.thisgray}
                    />
                    <CustomButton
                        title="로그인"
                        onPress={props.onLoginPress}
                        color={ValueConst.colors.colorPrimaryDark}
                        textColor={ValueConst.colors.white}
                    />
                </View>
            </View>
        </AnimatedView>
    );
};

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.groupLayout}>
                <View style={styles.btnGroup}>
                    <CustomButton
                        title="학교 이메일로 로그인"
                        onPress={this.props.onLoginPress}
                        color={ValueConst.colors.colorPrimaryDark}
                        textColor={ValueConst.colors.white}
                    />
                    <CustomButton
                        title="학교 이메일로 회원가입"
                        onPress={this.props.onJoinPress}
                        color={ValueConst.colors.white}
                        textColor={ValueConst.colors.colorPrimaryDark}
                    />
                    <Image style={styles.bottomLogo} source={require('../assets/img/text_logo_gray_small.png')} />
                </View>
            </View>
        );
    }
}

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
    groupLayout: {
        margin: 20,
        alignItems: 'center',
    },
    btnGroup: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    bottomLogo: {
        marginTop: 40,
        marginBottom: 10,
        width: 60,
        height: 13,
    },
    inputGroup: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    input: {
        marginTop: 2,
        marginBottom: 2,
        height: ValueConst.dimensions.button_height,
        backgroundColor: ValueConst.colors.white,
        color: ValueConst.colors.colorPrimaryDark,
        fontFamily: ValueConst.font.jalnan,
        width: '100%',
    },
});

export default App;
