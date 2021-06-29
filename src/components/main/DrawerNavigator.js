import React from 'react'
import TabNavigator from 'components/main/TabNavigator'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const DrawerNavigator = props => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
