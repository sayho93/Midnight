/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'

import React, {useState} from 'react'
import type {Node} from 'react'
import {NavigationContainer} from '@react-navigation/native'
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
} from 'react-native'

import NetUtil from '../utils/NetUtil'
import LottieView from 'lottie-react-native'
import ValueConst from '../utils/ValueConst'
import ButtonGroup from './auth/ButtonGroup'
import {InputGroup} from './auth/InputGroup'
import PropTypes from 'prop-types'
import {createStackNavigator} from '@react-navigation/stack'
import {CustomStatusBar} from './CustomStatusBar'

const Stack = createStackNavigator()

const App: () => Node = () => {
    const [state, setToggleState] = useState({
        toggle: false,
    })

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        pw: '',
    })

    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        backgroundColor: ValueConst.colors.themeColor,
        height: '100%',
    }

    const toggleHandler = () => {
        setToggleState({
            toggle: !state.toggle,
        })
    }

    const emailHandler = text => {
        setLoginInfo({email: text, pw: loginInfo.pw})
    }

    const pwHandler = text => {
        setLoginInfo({email: loginInfo.email, pw: text})
    }

    let group = null
    if (state.toggle)
        group = <InputGroup onLoginPress={onLoginPress} emailHandler={emailHandler} pwHandler={pwHandler} />
    else group = <ButtonGroup onLoginPress={toggleHandler} onJoinPress={onJoinPress} />

    async function onJoinPress() {
        await NetUtil.getBoard(136).then(res => {
            Alert.alert(res.data.content)
        })
    }

    async function onLoginPress() {
        await NetUtil.login(loginInfo.email, loginInfo.pw).then(res => {
            if (res.returnCode !== 1) {
                if (Platform.OS === 'android') ToastAndroid.show(res.returnMessage, ToastAndroid.SHORT)
                else Alert.alert(res.returnMessage)
            } else {
                if (Platform.OS === 'android') ToastAndroid.show(res.returnMessage, ToastAndroid.SHORT)
                else Alert.alert(res.returnMessage)
            }
        })
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen
                    name="SignIn"
                    component={CustomStatusBar}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="SignUp" component={ButtonGroup} options={{headerBackTitleVisible: false}} />
            </Stack.Navigator>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
                    <View style={styles.logoLayout}>
                        <LottieView
                            source={require('../../assets/animations/love-explosion.json')}
                            style={styles.lottie}
                            autoPlay
                            loop
                        />
                        <Image style={styles.logo} source={require('../../assets/img/title_logo_small.png')} />
                    </View>
                    {group}
                </KeyboardAvoidingView>
            </SafeAreaView>
        </NavigationContainer>
    )
}

App.propTypes = {
    counter: PropTypes.arrayOf(
        PropTypes.shape({
            counterNum: PropTypes.number,
        })
    ),
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    handleAddCounter: PropTypes.func,
    handleRemoveCounter: PropTypes.func,
}

App.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('handleIncrement not defined'),
    handleDecrement: () => console.warn('handleDecrement not defined'),
    handleAddCounter: () => console.warn('handleAddCounter not defiend'),
    handleRemoveCounter: () => console.warn('handleRemoveCounter not defiend'),
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
})

export default App
