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
import {useDispatch} from 'react-redux'
import UserSlice from 'store/slices/UserSlice'
import ValueConst from 'constants/ValueConst'
import Utils from 'utils/Utils'

import JoinStep1 from 'pages/auth/JoinStep1'
import JoinStep2 from 'pages/auth/JoinStep2'
import JoinStep3 from 'pages/auth/JoinStep3'
import GlobalStyle from 'styles/GlobalStyle'

enableScreens()
const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        Utils.getAsyncStorageData().then(res => {
            console.log('AsyncStorage User')
            console.log(res)
            if (res != null) dispatch(UserSlice.actions.setUser(res))
        })
    })

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: GlobalStyle.navigationHeader,
                headerTitleStyle: GlobalStyle.navigationHeaderTitle,
                headerTintColor: ValueConst.colors.white,
                headerBackTitleStyle: GlobalStyle.navigationBtnTitle,
                stackAnimation: 'slide_from_right',
                headerTopInsetEnabled: false,
            }}>
            <Stack.Screen
                name="EntryPoint"
                component={EntryPoint}
                // initialParams={{itemId: 42}}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="JoinStep1"
                component={JoinStep1}
                options={{
                    title: '회원가입',
                }}
            />
            <Stack.Screen
                name="JoinStep2"
                component={JoinStep2}
                options={{
                    title: '세부 정보',
                }}
            />
            <Stack.Screen
                name="JoinStep3"
                component={JoinStep3}
                options={{
                    title: '관심사 선택',
                }}
            />
            <Stack.Screen
                name="JoinStep4"
                component={JoinStep3}
                options={{
                    title: '테스트',
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator
