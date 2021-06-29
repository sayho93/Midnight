import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import TabNavigator from './TabNavigator'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const TabView = props => {
    const insets = useSafeAreaInsets()
    return (
        <View style={[GlobalStyle.background, {paddingBottom: insets.bottom}]}>
            <View style={styles.headerBar}>
                <Text style={GlobalStyle.textStyle}>Header Bar</Text>
            </View>
            <TabNavigator />
        </View>
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
