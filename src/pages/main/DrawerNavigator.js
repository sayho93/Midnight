import React from 'react'
import TabView from 'components/main/TabView'
import {createDrawerNavigator} from '@react-navigation/drawer'
import ValueConst from '../../constants/ValueConst'
import {useWindowDimensions, StatusBar, StyleSheet} from 'react-native'
import {DrawerContent} from '@react-navigation/drawer'
import DrawerMenu from 'components/main/DrawerMenu'

const Drawer = createDrawerNavigator()

const DrawerNavigator = props => {
    const dimensions = useWindowDimensions()

    React.useEffect(() => {
        props.navigation.addListener('beforeRemove', event => {
            event.preventDefault()
        })
    }, [props.navigation])

    return (
        <Drawer.Navigator
            drawerType={dimensions.width >= 768 ? 'permanent' : 'slide'}
            initialRouteName="Home"
            backBehavior="none"
            edgeWidth={50}
            drawerStyle={styles.drawerStyle}>
            <Drawer.Screen name="Home" component={TabView} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: ValueConst.colors.white,
    },
})

export default DrawerNavigator
