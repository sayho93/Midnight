import React from 'react'
import TabView from 'components/main/TabView'
import {createDrawerNavigator} from '@react-navigation/drawer'
import ValueConst from '../../constants/ValueConst'
import {useWindowDimensions, StatusBar, StyleSheet, Platform} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {DrawerContent} from '@react-navigation/drawer'
import DrawerMenu from 'components/main/DrawerMenu'
import GlobalStyle from '../../styles/GlobalStyle'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ({navigation}) => {
    const dimensions = useWindowDimensions()

    React.useEffect(() => {
        navigation.addListener('beforeRemove', event => {
            console.log(';;;;;')
            event.preventDefault()
            navigation.navigate('Main')
        })
    }, [navigation])

    return (
        <Drawer.Navigator
            drawerType={dimensions.width >= 768 ? 'permanent' : 'slide'}
            initialRouteName="TabView"
            backBehavior="none"
            edgeWidth={Platform.OS === 'android' ? 50 : 100}
            drawerStyle={styles.drawerStyle}
            overlayColor="transparent">
            <Drawer.Screen name="TabView" children={props => <TabView navigation={props.navigation} />} />
        </Drawer.Navigator>
        // <SafeAreaView style={GlobalStyle.background} edges={['top']}>
        //
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: ValueConst.colors.white,
        // backgroundColor: 'transparent',
        // borderRight: 1,
        borderColor: ValueConst.colors.colorPrimary,
    },
})

export default DrawerNavigator
