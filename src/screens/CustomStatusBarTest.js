/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {Platform, StyleSheet, View} from 'react-native'
import {CustomStatusBar} from '../components/CustomStatusBar'

const CustomStatusBarTest = props => {
    return (
        <View style={styles.container}>
            <CustomStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
            <View style={styles.appBar} />
            <View style={styles.content} />
        </View>
    )
}
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appBar: {
        backgroundColor: '#79B45D',
        height: APPBAR_HEIGHT,
    },
    content: {
        flex: 1,
        backgroundColor: '#33373B',
    },
})

export default CustomStatusBar
