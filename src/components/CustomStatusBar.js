import React from 'react'
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native'

export const CustomStatusBar = ({backgroundColor, ...props}) => {
    return (
        <View style={[styles.statusBar, {backgroundColor}]}>
            <SafeAreaView>
                <StatusBar transluent backgroundColor={backgroundColor} {...props} />
            </SafeAreaView>
        </View>
    )
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight
const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
})
