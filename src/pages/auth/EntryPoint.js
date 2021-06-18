/**
 * Sample React Native AuthNavigator
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, {useState} from 'react'
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

import NetUtil from '../../api/NetUtil'
import LottieView from 'lottie-react-native'
import ValueConst from '../../constant/ValueConst'
import ButtonGroup from '../../components/auth/ButtonGroup'
import {InputGroup} from '../../components/auth/InputGroup'

import {useDispatch, useSelector} from 'react-redux'
import UserSlice from '../../store/slices/UserSlice'
import Store from '../../store/Store'

const EntryPoint = ({route, navigation}) => {
    const [state, setToggleState] = useState({
        toggle: false,
    })

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        pw: '',
    })

    const dispatch = useDispatch()

    const isDarkMode = useColorScheme() === 'dark'

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

    const onJoinPress = () => {
        navigation.navigate('DetailsScreen')
    }

    const onLoginPress = async () => {
        await NetUtil.login(loginInfo.email, loginInfo.pw).then(res => {
            if (res.returnCode !== 1) {
                if (Platform.OS === 'android') ToastAndroid.show(res.returnMessage, ToastAndroid.SHORT)
                else Alert.alert(res.returnMessage)
            } else {
                //-------TEST
                dispatch(UserSlice.actions.setUser(res.data))
                console.log(Store.getState())
                //-------TEST
                if (Platform.OS === 'android') ToastAndroid.show(res.returnMessage, ToastAndroid.SHORT)
                else Alert.alert(res.returnMessage)
            }
        })
    }

    const onCancelPress = () => {
        console.log(Store.getState())
        toggleHandler()
    }

    let group
    if (state.toggle) {
        group = (
            <InputGroup
                onLoginPress={onLoginPress}
                onCancelPress={onCancelPress}
                emailHandler={emailHandler}
                pwHandler={pwHandler}
            />
        )
    } else group = <ButtonGroup onLoginPress={toggleHandler} onJoinPress={onJoinPress} />

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
                <View style={styles.logoLayout}>
                    <LottieView
                        source={require('../../../assets/animations/love-explosion.json')}
                        style={styles.lottie}
                        autoPlay
                        loop
                    />
                    <Image style={styles.logo} source={require('../../../assets/img/title_logo_small.png')} />
                </View>
                {group}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: ValueConst.colors.themeColor,
        height: '100%',
    },
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

export default EntryPoint
