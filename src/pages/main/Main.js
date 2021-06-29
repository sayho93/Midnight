import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import GlobalStyle from 'styles/GlobalStyle'
import {StyleSheet, Text, View} from 'react-native'
import DrawerNavigator from 'components/main/DrawerNavigator'
import ValueConst from 'constants/ValueConst'

const Main = props => {
    React.useEffect(() => {
        props.navigation.addListener('beforeRemove', event => {
            event.preventDefault()
        })
    }, [props.navigation])

    return (
        <View style={GlobalStyle.background}>
            <View style={styles.headerBar}>
                <Text style={GlobalStyle.textStyle}>Header Bar</Text>
            </View>
            <DrawerNavigator />
        </View>
    )
}

const styles = StyleSheet.create({
    headerBar: {
        height: ValueConst.dimensions.top_menu_height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ValueConst.colors.colorPrimaryDark,
    },
})

export default Main
