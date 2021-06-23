/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'

import React from 'react'
import {View, TouchableOpacity, Text, StatusBar, ScrollView, Image, SafeAreaView} from 'react-native'
import PropTypes from 'prop-types'
import {enableScreens} from 'react-native-screens'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import attr from '../glob/attr'
import colorPrimary from '../glob/GlobalStyle'
import EntryPoint from '../screens/EntryPoint'
import LottieView from "lottie-react-native";

enableScreens()
const Stack = createNativeStackNavigator()

function DetailsScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {count: 1})}>
                <Text>Detail Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const Detail = ({route, navigation}) => {
    const {count} = route.params
    return (
        <>
            <TouchableOpacity onPress={() => navigation.popToTop('Home')} style={{backgroundColor: 'yellow', flex: 1}}>
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.push('Detail', {count: count + 1})}
                style={{backgroundColor: 'blue', flex: 1}}>
                <Text>Detail {count}</Text>
            </TouchableOpacity>
        </>
    )
}

const screenJoin = ({route, navigation}) => {
    const {count} = route.params
    return (
        <SafeAreaView style={colorPrimary.backgroundColor}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView behavior="position" showsVerticalScrollIndicator={false}>
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
            </ScrollView>
        </SafeAreaView>
    )
}

const App = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="EntryPoint"
                component={EntryPoint}
                initialParams={{itemId: 42}}
                options={{headerShown: false}}
            />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
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

export default App
