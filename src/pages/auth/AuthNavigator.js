/**
 * Sample React Native AuthNavigator
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'

import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {enableScreens} from 'react-native-screens'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import EntryPoint from 'pages/auth/EntryPoint'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch} from 'react-redux'
import UserSlice from '../../store/slices/UserSlice'

import JoinStep1 from './JoinStep1'
import JoinStep2 from './JoinStep2'

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
        <Stack.Navigator>
            <Stack.Screen
                name="EntryPoint"
                component={EntryPoint}
                initialParams={{itemId: 42}}
                options={{headerShown: false}}
            />
            <Stack.Screen name="JoinStep1" component={JoinStep1} />
            <Stack.Screen name="Detail" component={JoinStep2} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
