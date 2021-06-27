import 'react-native-gesture-handler'
import React, {useState} from 'react'
import {
    Platform,
    StyleSheet,
    Image,
    useColorScheme,
    View,
    Alert,
    ToastAndroid,
    KeyboardAvoidingView,
} from 'react-native'

import NetUtil from 'api/NetUtil'
import LottieView from 'lottie-react-native'
import ButtonGroup from 'components/auth/ButtonGroup'
import {InputGroup} from 'components/auth/InputGroup'

import {useDispatch} from 'react-redux'
import UserSlice from 'store/slices/UserSlice'
import Store from 'store/Store'
import AsyncStorage from '@react-native-async-storage/async-storage'

import loveAnimation from 'animations/love-explosion.json'
import logo from 'img/title_logo_small.png'
import GlobalStyle from 'styles/GlobalStyle'

const EntryPoint = ({route, navigation}) => {
    const [state, setToggleState] = useState({
        toggle: false,
    })

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        pw: '',
    })

    const dispatch = useDispatch()

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
        navigation.navigate('JoinStep1')
    }

    const onLoginPress = async () => {
        await NetUtil.login(loginInfo.email, loginInfo.pw).then(async res => {
            if (res.returnCode !== 1) {
                if (Platform.OS === 'android') ToastAndroid.show(res.returnMessage, ToastAndroid.SHORT)
                else Alert.alert(res.returnMessage)
            } else {
                //-------TEST
                dispatch(UserSlice.actions.setUser(res.data))
                //-------TEST
                if (Platform.OS === 'android') ToastAndroid.show(res.returnMessage, ToastAndroid.SHORT)
                else Alert.alert(res.returnMessage)
            }
            await AsyncStorage.setItem('user', JSON.stringify(res.data))
        })
    }

    const onCancelPress = () => {
        console.log('Store.getState()')
        console.log(Store.getState())
        toggleHandler()
    }

    let group
    if (state.toggle) group = <InputGroup onLoginPress={onLoginPress} onCancelPress={onCancelPress} emailHandler={emailHandler} pwHandler={pwHandler} />
    else group = <ButtonGroup onLoginPress={toggleHandler} onJoinPress={onJoinPress} />

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'position'} style={GlobalStyle.background}>
            <View style={styles.logoLayout}>
                <LottieView source={loveAnimation} style={styles.lottie} autoPlay loop />
                <Image style={styles.logo} source={logo} />
            </View>
            {group}
        </KeyboardAvoidingView>
    )
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

export default EntryPoint
