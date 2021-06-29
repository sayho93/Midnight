import React from 'react'
import {Text, View} from 'react-native'
import TabNavigator from '../../components/main/TabNavigator'
import TabView from 'components/main/TabView'
import {createDrawerNavigator} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const DrawerView = props => {
    React.useEffect(() => {
        props.navigation.addListener('beforeRemove', (evnet) => {
            evnet.preventDefault()
        })
    }, [props.navigation])
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabView} />
        </Drawer.Navigator>
    )
}

export default DrawerView
