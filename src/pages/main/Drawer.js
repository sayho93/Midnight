import React from 'react'
import {Text, View} from 'react-native'
import TabNavigator from './TabNavigator'
import Detail from './Detail'
const Drawer = props => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Detail} />
        </Drawer.Navigator>
    )
}



export default Detail
