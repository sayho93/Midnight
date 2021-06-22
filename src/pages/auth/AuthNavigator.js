/**
 * Sample React Native AuthNavigator
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'

import React, {useEffect} from 'react'
import {enableScreens} from 'react-native-screens'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import EntryPoint from 'pages/auth/EntryPoint'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch} from 'react-redux'
import UserSlice from 'store/slices/UserSlice'
import ValueConst from 'constants/ValueConst'

import JoinStep1 from './JoinStep1'
import JoinStep2 from './JoinStep2'
import GlobalStyle from '../../styles/GlobalStyle'

enableScreens()
const Stack = createNativeStackNavigator()

const getData = () => {
    return new Promise(async (resolve, reject) => {
        await AsyncStorage.getItem('user')
            .then(res => {
                resolve(JSON.parse(res))
            })
            .catch(e => {
                console.log(e)
                reject(e)
            })
    })
}

const AuthNavigator = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getData().then(res => {
            console.log('AsyncStorage User')
            console.log(res)
            dispatch(UserSlice.actions.setUser(res))
        })
    })

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: GlobalStyle.navigationHeader,
                headerTitleStyle: GlobalStyle.navigationHeaderTitle,
                headerTintColor: ValueConst.colors.white,
            }}>
            <Stack.Screen
                name="EntryPoint"
                component={EntryPoint}
                initialParams={{itemId: 42}}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="JoinStep1"
                component={JoinStep1}
                options={{
                    headerTitle: '이메일 인증',
                }}
            />
            <Stack.Screen
                name="Detail"
                component={JoinStep2}
                options={{
                    headerTitle: '프로필 사진 및 소개',
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator
