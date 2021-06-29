import React from 'react'
import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import TabNavigator from './TabNavigator'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'

const TabView = props => {
    return (
        <SafeAreaView style={GlobalStyle.background} forceInset={{bottom: 'never'}}>
            <View style={GlobalStyle.background}>
                <View style={styles.headerBar}>
                    <Text style={GlobalStyle.textStyle}>Header Bar</Text>
                </View>
                <TabNavigator />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerBar: {
        height: ValueConst.dimensions.top_menu_height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ValueConst.colors.themeColor,
    },
})

export default TabView
