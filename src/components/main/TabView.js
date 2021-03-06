import React from 'react'
import {Image, StyleSheet, TouchableOpacity, TouchableHighlight, View} from 'react-native'
import TabNavigator from './TabNavigator'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'
import {useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Alert from 'img/alert_icon.png'
import Logo from 'img/title_logo_small.png'

const TabView = props => {
    const insets = useSafeAreaInsets()
    return (
        <SafeAreaView style={GlobalStyle.background}>
            <View style={styles.headerBar}>
                <TouchableHighlight style={styles.leftIconContainer}>
                    <Icon
                        name="bars"
                        size={20}
                        color={ValueConst.colors.white}
                        style={styles.leftIcon}
                        onPress={() => {
                            props.navigation.toggleDrawer()
                        }}
                    />
                </TouchableHighlight>
                <Image source={Logo} style={styles.logo} />
                <TouchableOpacity style={styles.rightIcon}>
                    <Image source={Alert} style={styles.rightIcon} />
                </TouchableOpacity>
            </View>
            <TabNavigator />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerBar: {
        height: ValueConst.dimensions.top_menu_height,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: ValueConst.colors.themeColor,
    },
    leftIconContainer: {
        paddingHorizontal: 5,
        flex: 1,
    },
    leftIcon: {
        textAlign: 'center',
    },
    logo: {
        alignSelf: 'center',
        paddingHorizontal: 5,
        flex: 5,
        height: 32,
        resizeMode: 'contain',
    },
    rightIcon: {
        paddingHorizontal: 5,
        flex: 1,
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
})

export default TabView
