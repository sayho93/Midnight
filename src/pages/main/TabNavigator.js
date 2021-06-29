import React from 'react'
import {StyleSheet, useWindowDimensions, View, Text} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Feed from 'components/main/Feed'
import Place from 'components/main/Place'
import Recc from 'components/main/Recc'
import Chat from 'components/main/Chat'
import Map from 'components/main/Map'
import MyTabBar from 'components/main/MyTabBar'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'

const Tab = createMaterialTopTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Feed" tabBarPosition="bottom" style={GlobalStyle.background} tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Feed" component={Feed} key="0" options={{tabBarLabel: 'Feed'}} />
            <Tab.Screen name="Place" component={Place} key="1" options={{tabBarLabel: 'Place'}} />
            <Tab.Screen name="Recc" component={Recc} key="2" options={{tabBarLabel: 'Recc'}} />
            <Tab.Screen name="Chat" component={Chat} key="3" options={{tabBarLabel: 'Chat'}} />
            <Tab.Screen name="Map" component={Map} key="4" options={{tabBarLabel: 'Map'}} />
        </Tab.Navigator>
    )
}

export default TabNavigator
